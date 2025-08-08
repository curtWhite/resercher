import { NextRequest, NextResponse } from 'next/server';
import { Tags } from '@/app/lib/db';
import { TagUpdateData } from '@/app/types';

// GET /api/tags/[id] - Get a specific tag by ID
export async function GET(
  request: NextRequest, 
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    const tag = await Tags.findById(id);
    
    if (!tag) {
      return NextResponse.json(
        { error: 'Tag not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(tag);
  } catch (error) {
    console.error('Error fetching tag:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/tags/[id] - Update a specific tag by ID
export async function PUT(
  request: NextRequest, 
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data: TagUpdateData = await request.json();
    
    const tag = await Tags.findById(id);
    
    if (!tag) {
      return NextResponse.json(
        { error: 'Tag not found' },
        { status: 404 }
      );
    }
    
    // Check if the new slug already exists and is not the same tag
    if (data.slug) {
      const slugExists = await Tags.findBySlug(data.slug);
      if (slugExists && slugExists.id !== id) {
        return NextResponse.json(
          { error: 'A tag with this slug already exists' },
          { status: 409 }
        );
      }
    }
      

    
    const updatedTag = {
      ...tag,
      ...data
    };
    
    // Update the tag in our in-memory array
    return await Tags.update(id, updatedTag).then(() => {
      console.log('Tag updated successfully');
      return NextResponse.json(updatedTag);
    });
    
  } catch (error) {
    console.error('Error updating tag:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/tags/[id] - Delete a specific tag by ID
export async function DELETE(
  request: NextRequest, 
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    const tag = await Tags.findById(id);
    
    if (!tag) {
      return NextResponse.json(
        { error: 'Tag not found' },
        { status: 404 }
      );
    }
    
    // Remove the tag from our in-memory array
    return await Tags.delete(id).then(() => {
      console.log('Tag deleted successfully');
      return NextResponse.json(
        { message: 'Tag successfully deleted' },
        { status: 200 }
      );
    });
    
  } catch (error) {
    console.error('Error deleting tag:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}