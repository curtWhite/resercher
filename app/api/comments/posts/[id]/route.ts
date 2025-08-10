import { NextRequest, NextResponse } from 'next/server';
import { Comments } from '@/app/lib/db';

// GET /api/comments/posts[id] - Get a specific Comment by ID
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string, post?: string } }
) {
    try {
        const { id } = params;

        
        const comment = await Comments.getAllByPostId(id);
        
        if (!comment) {
            return NextResponse.json(
                { error: 'Comment not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(comment);
    } catch (error) {
        console.error('Error fetching Comment:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}