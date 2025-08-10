import { NextRequest, NextResponse } from 'next/server';
import { ResearchPapers } from '@/app/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { PaperQueryParams, ResearchPaper } from '@/app/types';

// GET /api/papers - Get all research papers with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const userId = searchParams.get('userId') || undefined;
    const query = searchParams.get('query') || undefined;
    const sort = searchParams.get('sort') || 'desc';

    const researchPapers = await ResearchPapers.getAll();

    // Apply filters
    let filteredPapers = [...researchPapers];


    if (userId) {
      filteredPapers = await ResearchPapers.findByUserId(userId);
    }

    if (query) {
      const lowerQuery = query.toLowerCase();
      let filtered = await ResearchPapers.filterByKeys([
        { title: { $regex: lowerQuery, $options: 'i' } },
        { abstract: { $regex: lowerQuery, $options: 'i' } },
        { authors: { $elemMatch: { $regex: lowerQuery, $options: 'i' } } }
      ]);

      if (filtered.length === 0) {
        return NextResponse.json(
          { error: 'No papers found matching the query' },
          { status: 404 }
        );
      }
      filteredPapers = filtered;
      // If no papers found after filtering
      if (filteredPapers.length === 0) {
        return NextResponse.json(
          { error: 'No papers found' },
          { status: 404 }
        );
      }
    }

    // filteredPapers = filteredPapers.filter(
    //   paper => 
    //     paper.title.toLowerCase().includes(lowerQuery) || 
    //     paper.abstract.toLowerCase().includes(lowerQuery) ||
    //     paper.authors.some(author => author.toLowerCase().includes(lowerQuery))
    // );

    // Sort by uploadedAt in descending order
    if (sort === 'asc') {
      filteredPapers.sort((a, b) =>
        new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime()
      );
    } else {
      // Default to descending order
      filteredPapers.sort((a, b) =>
        new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
      );
    }


    // Paginate results
    const total = filteredPapers.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedPapers = filteredPapers.slice(startIndex, endIndex);

    return NextResponse.json({
      items: paginatedPapers,
      total,
      page,
      limit,
      totalPages
    });
  } catch (error) {
    console.error('Error fetching papers:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/papers - Upload a new research paper
export async function POST(request: NextRequest) {
  try {
    // In a real app, this would handle file upload with a multipart form
    // Here we'll just handle the metadata as JSON
    const data = await request.json();

    // Basic validation
    if (!data.title || !data.authors || !data.abstract || !data.userId || !data.pdfUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    const newPaper: ResearchPaper = {
      id: uuidv4(),
      title: data.title,
      authors: data.authors,
      abstract: data.abstract,
      pdfUrl: data.pdfUrl,
      doi: data.doi,
      journal: data.journal,
      publicationDate: data.publicationDate,
      userId: data.userId,
      uploadedAt: now,
      citations: data.citations || [],
      keywords: data.keywords || [],
      pages: data.pages || '',
      issue: data.issue || '',
      volume: data.volume || '',
      externalUrl: data.externalUrl || ''
    };

    // In a real app, we would save to a database
    // For now, we just add to our in-memory array
    return await ResearchPapers.create(newPaper).then(() => {
      return NextResponse.json(newPaper, { status: 201 });
    })

  } catch (error) {
    console.error('Error uploading paper:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}