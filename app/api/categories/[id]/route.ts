import { NextRequest, NextResponse } from 'next/server';
import { Categories } from '@/app/lib/db';
import { CategoryUpdateData } from '@/app/types';

// GET /api/categories/[id] - Get a specific category by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const category = await Categories.findById(id);

    if (!category?._id) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/categories/[id] - Update a specific category by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data: CategoryUpdateData = await request.json();

    const category = await Categories.findById(id);

    if (!category?._id) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    // Check if the new slug already exists and is not the same category
    if (data.slug) {
      const slugExists = await Categories.findBySlug(data.slug);
      if (slugExists && slugExists.id !== id) {
        return NextResponse.json(
          { error: 'A category with this slug already exists' },
          { status: 409 }
        );
      }

    }

    const updatedCategory = {
      ...category,
      ...data
    };

    // Update the category in our in-memory array
    return await Categories.update(id, updatedCategory).then(() => {
      console.log('Category updated successfully');
      return NextResponse.json(updatedCategory);
    })
    
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/categories/[id] - Delete a specific category by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const category = await Categories.findById(id);

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    // Remove the category from our in-memory array
    return await Categories.delete(id).then(() => {
      console.log('Category deleted successfully');
      return NextResponse.json(
        { message: 'Category successfully deleted' },
        { status: 200 }
      );
    });

  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}