import { NextRequest, NextResponse } from 'next/server';
import { Comments, Users } from '@/app/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { Comment, CommentCreateData } from '@/app/types';

// GET /api/comments - Get all comments
export async function GET() {
  try {
    return NextResponse.json(await Comments.getAll() || []);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/comments - Create a new Comment
export async function POST(request: NextRequest) {
  try {
    const data: CommentCreateData = await request.json();

    // Basic validation
    if (!data.postId || !data.userId || !data.content) {
      return NextResponse.json(
        { error: 'missing fields are required' },
        { status: 400 }
      );
    }

    // Check if id already exists
    const existingComment = await Comments.findById(data?.id ?? '');
    if (existingComment) {
      return NextResponse.json(
        { error: 'A Comment with this id already exists' },
        { status: 409 }
      );
    }
    const user = await Users.findById(data.userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const newComment: Comment = {
      id: uuidv4(),
      postId: data.postId,
      content: data.content,
      userId: data.userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      user: {
        ...user,
        _id: typeof user._id === 'string' ? user._id : user._id?.toString()
      }
    };


    // In a real app, we would save to a database
    // For now, we just add to our in-memory array
    await Comments.create(newComment);

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error('Error creating Comment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}