"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ResearchPaper, Category, Tag } from '@/app/types';

export default function NewReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paperId = searchParams.get('paperId');
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    paperId: paperId || '',
    categoryIds: [] as string[],
    tagIds: [] as string[],
    coverImageUrl: '',
    status: 'draft' // draft or published
  });
  
  // Paper search state
  const [paperSearchQuery, setPaperSearchQuery] = useState('');
  const [showPaperSearch, setShowPaperSearch] = useState(!paperId);
  
  useEffect(() => {
    async function fetchInitialData() {
      try {
        setIsLoading(true);
        
        // Fetch categories and tags in parallel
        const [categoriesRes, tagsRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/tags')
        ]);
        
        if (!categoriesRes.ok || !tagsRes.ok) {
          throw new Error('Failed to fetch categories or tags');
        }
        
        const [categoriesData, tagsData] = await Promise.all([
          categoriesRes.json(),
          tagsRes.json()
        ]);
        
        setCategories(categoriesData.data || []);
        setTags(tagsData.data || []);
        
        // If paperId is provided, fetch paper details
        if (paperId) {
          const paperRes = await fetch(`/api/papers/${paperId}`);
          if (paperRes.ok) {
            const paperData = await paperRes.json();
            setSelectedPaper(paperData.data);
            // Pre-fill title based on paper title
            setFormData(prev => ({
              ...prev,
              title: `Review: ${paperData.data.title}`,
              paperId: paperData.data.id
            }));
          } else {
            throw new Error('Failed to fetch paper details');
          }
        } else {
          // Fetch some recent papers for easier selection
          const papersRes = await fetch('/api/papers?limit=5');
          if (papersRes.ok) {
            const papersData = await papersRes.json();
            setPapers(papersData.data || []);
          }
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    // Check if user is authenticated
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me');
        if (!response.ok) {
          // Redirect to login
          router.push('/login?redirect=reviews/new');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        // Redirect to login on error
        router.push('/login?redirect=reviews/new');
      }
    }
    
    checkAuth();
    fetchInitialData();
  }, [router, paperId]);
  
  // Search for papers when query changes
  useEffect(() => {
    if (!paperSearchQuery.trim() || paperSearchQuery.length < 3) {
      return;
    }
    
    const searchTimeoutId = setTimeout(async () => {
      try {
        const searchRes = await fetch(`/api/papers?search=${encodeURIComponent(paperSearchQuery)}`);
        if (searchRes.ok) {
          const searchData = await searchRes.json();
          setPapers(searchData.data || []);
        }
      } catch (err) {
        console.error('Paper search failed:', err);
      }
    }, 500);
    
    return () => clearTimeout(searchTimeoutId);
  }, [paperSearchQuery]);
  
  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle category selection
  const handleCategoryToggle = (categoryId: string) => {
    setFormData((prev) => {
      const updatedCategories = prev.categoryIds.includes(categoryId)
        ? prev.categoryIds.filter(id => id !== categoryId)
        : [...prev.categoryIds, categoryId];
      
      return {
        ...prev,
        categoryIds: updatedCategories
      };
    });
  };
  
  // Handle tag selection
  const handleTagToggle = (tagId: string) => {
    setFormData((prev) => {
      const updatedTags = prev.tagIds.includes(tagId)
        ? prev.tagIds.filter(id => id !== tagId)
        : [...prev.tagIds, tagId];
      
      return {
        ...prev,
        tagIds: updatedTags
      };
    });
  };
  
  // Handle paper selection
  const handlePaperSelect = (paper: ResearchPaper) => {
    setSelectedPaper(paper);
    setFormData(prev => ({
      ...prev,
      paperId: paper.id,
      title: prev.title || `Review: ${paper.title}`
    }));
    setShowPaperSearch(false);
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent, status: 'draft' | 'published') => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }
    
    if (!formData.content.trim()) {
      setError('Content is required');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create review');
      }
      
      const data = await response.json();
      
      setSuccess(status === 'published' 
        ? 'Your review has been published successfully!' 
        : 'Your draft has been saved successfully!'
      );
      
      // Redirect to the new post after a brief delay
      setTimeout(() => {
        router.push(`/reviews/${data.data.id}`);
      }, 1500);
      
    } catch (err: any) {
      setError(err.message || 'An error occurred while creating the review');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Write a New Review</h1>
          <Link href="/reviews" className="text-blue-600 hover:underline">
            Cancel
          </Link>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
            <p className="text-green-700">{success}</p>
          </div>
        )}
        
        <form onSubmit={(e) => handleSubmit(e, formData.status as 'draft' | 'published')}>
          {/* Paper Selection */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">1. Select Research Paper</h2>
            
            {selectedPaper ? (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{selectedPaper.title}</h3>
                    <p className="text-sm text-gray-600">
                      {selectedPaper.authors.join(', ')} • {selectedPaper.journal}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPaper(null);
                      setShowPaperSearch(true);
                      setFormData(prev => ({
                        ...prev,
                        paperId: ''
                      }));
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Change Paper
                  </button>
                </div>
              </div>
            ) : showPaperSearch ? (
              <div>
                <div className="mb-4">
                  <label htmlFor="paperSearch" className="block text-sm font-medium text-gray-700 mb-1">
                    Search for a paper
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="paperSearch"
                      value={paperSearchQuery}
                      onChange={(e) => setPaperSearchQuery(e.target.value)}
                      placeholder="Enter paper title, authors, or DOI..."
                      className="block w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                </div>
                
                {papers.length > 0 ? (
                  <div className="space-y-4 max-h-72 overflow-y-auto">
                    {papers.map((paper) => (
                      <div 
                        key={paper.id}
                        className="p-3 border rounded-lg cursor-pointer hover:bg-blue-50"
                        onClick={() => handlePaperSelect(paper)}
                      >
                        <h4 className="font-medium mb-1">{paper.title}</h4>
                        <p className="text-sm text-gray-600">
                          {paper.authors.join(', ')} • {paper.journal}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm">
                    {paperSearchQuery.length >= 3 
                      ? 'No papers found. Try a different search term.' 
                      : 'Type at least 3 characters to search for papers.'}
                  </p>
                )}
                
                <p className="mt-4 text-sm text-gray-500">
                  Can&apos;t find the paper you&apos;re looking for?{' '}
                  <Link href="/papers/new" className="text-blue-600 hover:underline">
                    Add a new paper
                  </Link>
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowPaperSearch(true)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Select a Research Paper
              </button>
            )}
          </div>
          
          {/* Review Details */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">2. Review Details</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title*
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter a descriptive title for your review"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt/Summary
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  rows={2}
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Write a brief summary of your review (will appear in listings)"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="coverImageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  id="coverImageUrl"
                  name="coverImageUrl"
                  value={formData.coverImageUrl}
                  onChange={handleInputChange}
                  placeholder="Enter a URL for the review cover image"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Review Content*
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={12}
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Write your detailed review here..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
          
          {/* Categories and Tags */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">3. Categories and Tags</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => handleCategoryToggle(category.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        formData.categoryIds.includes(category.id)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      type="button"
                      key={tag.id}
                      onClick={() => handleTagToggle(tag.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        formData.tagIds.includes(tag.id)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            
            <div className="space-x-4">
              <button
                type="button"
                onClick={(e) => {
                  setFormData(prev => ({ ...prev, status: 'draft' }));
                  handleSubmit(e, 'draft');
                }}
                disabled={isSubmitting}
                className={`px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Save as Draft
              </button>
              
              <button
                type="button"
                onClick={(e) => {
                  setFormData(prev => ({ ...prev, status: 'published' }));
                  handleSubmit(e, 'published');
                }}
                disabled={isSubmitting}
                className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Publishing...' : 'Publish Review'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}