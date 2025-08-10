import { NextRequest, NextResponse } from 'next/server';
import { Comments } from '@/app/lib/db';
import { CommentUpdateData } from '@/app/types';

// GET /api/comments/[id] - Get a specific Comment by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string, post?: string } }
) {
  try {
    const { id } = params;

    const comment = await Comments.findById(id);

    if (!comment?._id) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(Comment);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/comments/[id] - Update a specific Comment by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data: CommentUpdateData = await request.json();

    const Comment = await Comments.findById(id);

    if (!Comment?._id) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Check if the new id already exists and is not the same Comment
    if (data.content) {
      const slugExists = await Comments.findById(data.id ?? '');
      if (slugExists && slugExists.id !== id) {
        return NextResponse.json(
          { error: 'A Comment with this id already exists' },
          { status: 409 }
        );
      }

    }

    const updatedComment = {
      ...Comment,
      ...data
    };

    // Update the Comment in our in-memory array
    return await Comments.update(id, updatedComment).then(() => {
      console.log('Comment updated successfully');
      return NextResponse.json(updatedComment);
    })

  } catch (error) {
    console.error('Error updating Comment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/comments/[id] - Delete a specific Comment by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const Comment = await Comments.findById(id);

    if (!Comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Remove the Comment from our in-memory array
    return await Comments.delete(id).then(() => {
      console.log('Comment deleted successfully');
      return NextResponse.json(
        { message: 'Comment successfully deleted' },
        { status: 200 }
      );
    });

  } catch (error) {
    console.error('Error deleting Comment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}