"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ResearchPaper, Category } from '@/app/types';

export default function PapersPage() {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [journalFilter, setJournalFilter] = useState<string>('');

  // Get unique journals from papers
  const journals = Array.from(new Set(papers.map(paper => paper.journal)));

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        // Fetch papers and categories in parallel
        const [papersRes, categoriesRes] = await Promise.all([
          fetch('/api/papers'),
          fetch('/api/categories')
        ]);

        if (!papersRes.ok) throw new Error('Failed to fetch papers');
        if (!categoriesRes.ok) throw new Error('Failed to fetch categories');

        const papersData = await papersRes.json();
        const categoriesData = await categoriesRes.json();

        setPapers(papersData.items || []);
        setCategories(categoriesData || []);

      } catch (err: any) {
        setError(err.message || 'Failed to load data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Handle journal filter change
  const handleJournalChange = (journal: string) => {
    setJournalFilter(journalFilter === journal ? '' : journal);
  };

  // Filter and sort papers
  const filteredAndSortedPapers = [...papers]
    .filter(paper => {
      // Filter by journal if selected
      if (journalFilter && paper.journal !== journalFilter) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          paper.title.toLowerCase().includes(query) ||
          paper.authors.some(author => author.toLowerCase().includes(query)) ||
          paper.abstract.toLowerCase().includes(query) ||
          paper.journal?.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publicationDate ?? '').getTime() - new Date(a.publicationDate ?? '').getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.publicationDate ?? '').getTime() - new Date(b.publicationDate ?? '').getTime();
      } else if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

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

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Research Papers</h1>

      {/* Search and filters */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Search input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search papers by title, author, or journal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Sort dropdown */}
          <div className="flex-shrink-0">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
              Sort by
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Journal filters */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Journal</h3>
          <div className="flex flex-wrap gap-2">
            {journals.map((journal) => (
              <button
                key={journal}
                onClick={() => handleJournalChange(journal ?? '')}
                className={`px-3 py-1 rounded-full text-sm ${journalFilter === journal
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {journal}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredAndSortedPapers.length} {filteredAndSortedPapers.length === 1 ? 'paper' : 'papers'}
        {journalFilter && ` in ${journalFilter}`}
      </p>

      {/* Papers list */}
      {filteredAndSortedPapers.length > 0 ? (
        <div className="space-y-8">
          {filteredAndSortedPapers.map((paper) => (
            <div key={paper.id} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
              <h2 className="text-xl font-bold mb-2">{paper.title}</h2>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {paper.journal}
                </span>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {paper.publicationDate ? formatDate(paper.publicationDate) : 'Unknown date'}
                </span>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  DOI: {paper.doi}
                </span>
              </div>

              <p className="text-gray-600 mb-2">
                <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
              </p>

              <p className="text-gray-700 mb-4 line-clamp-3">{paper.abstract}</p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/papers/${paper.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  View Details
                </Link>

                {paper.pdfUrl && (
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
                  >
                    View PDF
                  </a>
                )}

                {/* Find related reviews link */}
                <Link
                  href={`/reviews?paper=${paper.id}`}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                >
                  Find Related Reviews
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No papers found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setJournalFilter('');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}