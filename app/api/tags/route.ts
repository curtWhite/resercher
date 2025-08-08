import { NextRequest, NextResponse } from 'next/server';
import { Tags } from '@/app/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { Tag, TagCreateData } from '@/app/types';

// GET /api/tags - Get all tags
export async function GET() {
  try {
    return NextResponse.json(await Tags.getAll() || []);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/tags - Create a new tag
export async function POST(request: NextRequest) {
  try {
    const data: TagCreateData = await request.json();

    // Basic validation
    if (!data.name || !data.slug) {
      return NextResponse.json(
        { error: 'Name and slug are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingTag = await Tags.findBySlug(data.slug);
    if (existingTag) {
      return NextResponse.json(
        { error: 'A tag with this slug already exists' },
        { status: 409 }
      );
    }

    const newTag: Tag = {
      id: uuidv4(),
      name: data.name,
      slug: data.slug
    };

    // In a real app, we would save to a database
    // For now, we just add to our in-memory array
    return await Tags.create(newTag).then(() => {
      console.log('Tag created successfully');
      return NextResponse.json(newTag, { status: 201 });
    });


  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}