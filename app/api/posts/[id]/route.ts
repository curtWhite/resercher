import { NextRequest, NextResponse } from 'next/server';
import { BlogPosts } from '@/app/lib/db';
import { BlogPostUpdateData } from '@/app/types';

// GET /api/posts/[id] - Get a specific blog post by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const blogPosts = await BlogPosts.getAll();

    const post = blogPosts.find(post => post.id === id);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/posts/[id] - Update a specific blog post by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data: BlogPostUpdateData = await request.json();

    const post = await BlogPosts.findById(id);


    if (post === null) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const now = new Date().toISOString();
    const updatedPost = {
      ...post,
      ...data,
      updatedAt: now,
      // If post wasn't published before but is now being published
      publishedAt: (!post.published && data.published) ? now : post.publishedAt
    };

    // Update the post in our in-memory array
    return await BlogPosts.update(id, updatedPost).then(() => {
      console.log('Post updated successfully');
      return NextResponse.json(updatedPost);
    });

  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/posts/[id] - Delete a specific blog post by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const post = await BlogPosts.findById(id);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Remove the post from our in-memory array
    return await BlogPosts.delete(id).then((result) => {
      if (!result.acknowledged) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      } else {
        return NextResponse.json(
          { message: 'Post successfully deleted' },
          { status: 200 }
        );
      }
    });


  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}