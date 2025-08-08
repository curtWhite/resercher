import { NextRequest, NextResponse } from 'next/server';
import { ResearchPapers } from '@/app/lib/db';

// GET /api/papers/[id] - Get a specific research paper by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const paper = await ResearchPapers.findById(id);

    if (!paper?._id) {
      return NextResponse.json(
        { error: 'Paper not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(paper);
  } catch (error) {
    console.error('Error fetching paper:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/papers/[id] - Update a specific research paper by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = await request.json();

    const paper = await ResearchPapers.findById(id);

    if (!paper) {
      return NextResponse.json(
        { error: 'Paper not found' },
        { status: 404 }
      );
    }

    const updatedPaper = {
      ...paper,
      ...data,
      // Don't allow updating id or uploadedAt
      id: paper._id,
      uploadedAt: paper.uploadedAt
    };

    // Update the paper in our in-memory array
    return await ResearchPapers.update(id, updatedPaper).then(() => {
      console.log('Paper updated successfully');
      return NextResponse.json(updatedPaper);
    });

  } catch (error) {
    console.error('Error updating paper:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/papers/[id] - Delete a specific research paper by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const paper = await ResearchPapers.findById(id);

    if (!paper) {
      return NextResponse.json(
        { error: 'Paper not found' },
        { status: 404 }
      );
    }

    // Remove the paper from our in-memory array
    return await ResearchPapers.delete(id).then(() => {
      console.log('Paper deleted successfully');
      return NextResponse.json(
        { message: 'Paper successfully deleted' },
        { status: 200 }
      );
    });

  } catch (error) {
    console.error('Error deleting paper:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}