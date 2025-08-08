import { NextRequest, NextResponse } from 'next/server';
import { Categories } from '@/app/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { Category, CategoryCreateData } from '@/app/types';

// GET /api/categories - Get all categories
export async function GET() {
  try {
    return NextResponse.json(await Categories.getAll() || []);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/categories - Create a new category
export async function POST(request: NextRequest) {
  try {
    const data: CategoryCreateData = await request.json();

    // Basic validation
    if (!data.name || !data.description || !data.slug) {
      return NextResponse.json(
        { error: 'Name, description, and slug are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingCategory = await Categories.findBySlug(data.slug);
    if (existingCategory) {
      return NextResponse.json(
        { error: 'A category with this slug already exists' },
        { status: 409 }
      );
    }

    const newCategory: Category = {
      id: uuidv4(),
      name: data.name,
      description: data.description,
      slug: data.slug
    };

    // In a real app, we would save to a database
    // For now, we just add to our in-memory array
    await Categories.create(newCategory);

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}