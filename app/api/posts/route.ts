import { NextRequest, NextResponse } from 'next/server';
import { BlogPosts } from '@/app/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { BlogPost, BlogPostCreateData, PostQueryParams } from '@/app/types';

// GET /api/posts - Get all blog posts with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const categoryId = searchParams.get('categoryId') || undefined;
    const tagId = searchParams.get('tagId') || undefined;
    const userId = searchParams.get('userId') || undefined;
    const query = searchParams.get('query') || undefined;

    const blogPosts = await BlogPosts.getAll();
    // Apply filters
    let filteredPosts = [...blogPosts].filter(post => post.published);

    if (categoryId) {
      filteredPosts = filteredPosts.filter(post => post.categoryIds.includes(categoryId));
    }

    if (tagId) {
      filteredPosts = filteredPosts.filter(post => post.tagIds.includes(tagId));
    }

    if (userId) {
      filteredPosts = filteredPosts.filter(post => post.userId === userId);
    }

    if (query) {
      const lowerQuery = query.toLowerCase();
      filteredPosts = filteredPosts.filter(
        post => 
          post.title.toLowerCase().includes(lowerQuery) || 
          post.content.toLowerCase().includes(lowerQuery)
      );
    }

    // Sort by publishedAt in descending order
    filteredPosts.sort((a, b) => {
      if (!a.publishedAt) return 1;
      if (!b.publishedAt) return -1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    // Paginate results
    const total = filteredPosts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return NextResponse.json({
      items: paginatedPosts,
      total,
      page,
      limit,
      totalPages
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/posts - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const data: BlogPostCreateData = await request.json();

    // Basic validation
    if (!data.title || !data.content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    const newPost: BlogPost = {
      id: uuidv4(),
      title: data.title,
      content: data.content,
      excerpt: data.excerpt || data.content.substring(0, 150) + '...',
      coverImageUrl: data.coverImageUrl,
      userId: data.userId,
      categoryIds: data.categoryIds || [],
      tagIds: data.tagIds || [],
      paperId: data.paperId,
      publishedAt: data.publishedAt ? data.publishedAt : now,
      createdAt: now,
      updatedAt: now,
      published: data.published || false,
    };

    // In a real app, we would save to a database
    // For now, we just add to our in-memory array
    return await BlogPosts.create(newPost).then(() => {
      console.log('Post created successfully');
      return NextResponse.json(newPost, { status: 201 });
    });

  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}