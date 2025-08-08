"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ResearchPaper, BlogPost } from '@/app/types';
// import PdfViewer from '@/app/components/pdf-viewer';

export default function PaperDetailPage() {
  const params = useParams();
  const router = useRouter();
  const paperId = params.id as string;
  
  const [paper, setPaper] = useState<ResearchPaper | null>(null);
  const [relatedReviews, setRelatedReviews] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPdf, setShowPdf] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        
        // Fetch paper details
        const paperRes = await fetch(`/api/papers/${paperId}`);
        if (!paperRes.ok) {
          if (paperRes.status === 404) {
            router.push('/404');
            return;
          }
          throw new Error('Failed to fetch paper');
        }
        
        const paperData = await paperRes.json();
        setPaper(paperData.data);
        
        // Fetch related reviews if paper exists
        if (paperData.data) {
          const reviewsRes = await fetch(`/api/papers/${paperId}/reviews`);
          if (reviewsRes.ok) {
            const reviewsData = await reviewsRes.json();
            setRelatedReviews(reviewsData.data || []);
          }
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load paper');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, [paperId, router]);
  
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }
  
  if (error || !paper) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">{error || 'Paper not found'}</p>
          <Link href="/papers" className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Back to Papers
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-8" aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="text-gray-500">
            <span className="mx-2">/</span>
            <Link href="/papers" className="text-gray-500 hover:text-blue-600">
              Papers
            </Link>
          </li>
          <li className="text-gray-800">
            <span className="mx-2">/</span>
            <span>Current Paper</span>
          </li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Paper header */}
            <div className="p-6 border-b">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{paper.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {paper.journal}
                </span>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Published: {paper.publicationDate ? formatDate(paper.publicationDate) : 'Unknown date'}
                </span>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  DOI: {paper.doi}
                </span>
              </div>
              
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
              </p>
              
              {paper.keywords && paper.keywords.length > 0 && (
                <div className="mt-4">
                  <p className="text-gray-600 mb-1 font-medium">Keywords:</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Abstract */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Abstract</h2>
              <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>
              
              <div className="mt-6 flex space-x-4">
                <button
                  onClick={() => setShowPdf(!showPdf)}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
                >
                  {showPdf ? 'Hide PDF' : 'View PDF'}
                </button>
                
                {paper.pdfUrl && (
                  <a
                    href={paper.pdfUrl}
                    download
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Download PDF
                  </a>
                )}
                
                {paper.externalUrl && (
                  <a
                    href={paper.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                  >
                    Publisher Site
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* PDF Viewer */}
          {/* {showPdf && paper.pdfUrl && (
            <div className="mt-8">
              <PdfViewer pdfUrl={paper.pdfUrl} />
            </div>
          )} */}
          
          {/* Citations section */}
          {paper.citations && paper.citations.length > 0 && (
            <div className="mt-8 bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Citations</h2>
              <div className="space-y-4">
                {paper.citations.map((citation, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-4">
                    <p className="text-gray-700">{citation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Related reviews */}
          {relatedReviews.length > 0 ? (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Related Reviews</h3>
              <div className="space-y-4">
                {relatedReviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                    {review.coverImageUrl && (
                      <img 
                        src={review.coverImageUrl} 
                        alt={review.title}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                    )}
                    <h4 className="font-medium mb-1">
                      <Link 
                        href={`/reviews/${review.id}`}
                        className="hover:text-blue-600 transition"
                      >
                        {review.title}
                      </Link>
                    </h4>
                    {review.publishedAt && (
                      <p className="text-sm text-gray-500 mb-2">
                        {formatDate(review.publishedAt)}
                      </p>
                    )}
                    <p className="text-gray-600 line-clamp-2">{review.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">No Reviews Yet</h3>
              <p className="text-gray-600 mb-4">
                Be the first to review this research paper and share your insights with the community.
              </p>
              <Link
                href="/reviews/new?paperId=${paper.id}"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Write a Review
              </Link>
            </div>
          )}
          
          {/* Paper information */}
          <div className="bg-white shadow rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-4">Paper Information</h3>
            <div className="space-y-3">
              {paper.publicationDate && (
                <div>
                  <p className="text-gray-600 font-medium">Publication Date</p>
                  <p className="text-gray-800">{formatDate(paper.publicationDate)}</p>
                </div>
              )}
              {paper.journal && (
                <div>
                  <p className="text-gray-600 font-medium">Journal</p>
                  <p className="text-gray-800">{paper.journal}</p>
                </div>
              )}
              {paper.volume && (
                <div>
                  <p className="text-gray-600 font-medium">Volume</p>
                  <p className="text-gray-800">{paper.volume}</p>
                </div>
              )}
              {paper.issue && (
                <div>
                  <p className="text-gray-600 font-medium">Issue</p>
                  <p className="text-gray-800">{paper.issue}</p>
                </div>
              )}
              {paper.pages && (
                <div>
                  <p className="text-gray-600 font-medium">Pages</p>
                  <p className="text-gray-800">{paper.pages}</p>
                </div>
              )}
              {paper.doi && (
                <div>
                  <p className="text-gray-600 font-medium">DOI</p>
                  <p className="text-gray-800">
                    <a 
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {paper.doi}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}