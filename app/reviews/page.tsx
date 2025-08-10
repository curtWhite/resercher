"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogCard from '@/app/components/blog/blog-card';
import { BlogPost, Category, Tag } from '@/app/types';

export default function ReviewsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [showAll, setShowALl] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        // Fetch posts, categories, and tags in parallel
        const [postsRes, categoriesRes, tagsRes] = await Promise.all([
          fetch('/api/posts'),
          fetch('/api/categories'),
          fetch('/api/tags')
        ]);

        if (!postsRes.ok) throw new Error('Failed to fetch posts');
        if (!categoriesRes.ok) throw new Error('Failed to fetch categories');
        if (!tagsRes.ok) throw new Error('Failed to fetch tags');

        const postsData = await postsRes.json();
        const categoriesData = await categoriesRes.json();
        const tagsData = await tagsRes.json();

        setPosts(postsData.items || []);
        setCategories(categoriesData || []);
        setTags(tagsData || []);

      } catch (err: any) {
        setError(err.message || 'Failed to load data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Handle category filter change
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId === selectedCategory ? '' : catId);
  };

  // Handle tag filter toggle
  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Filter and sort posts
  const filteredAndSortedPosts = [...posts]
    .filter(post => {
      // Filter by category if selected
      if (selectedCategory && !post.categoryIds?.includes(selectedCategory)) {
        return false;
      }

      // Filter by selected tags
      if (selectedTags.length > 0) {
        // Check if post has at least one of the selected tags
        if (!selectedTags.some(tagId => post.tagIds?.includes(tagId))) {
          return false;
        }
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedAt || b.createdAt).getTime() -
          new Date(a.publishedAt || a.createdAt).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.publishedAt || a.createdAt).getTime() -
          new Date(b.publishedAt || b.createdAt).getTime();
      }
      // Add more sort options as needed
      return 0;
    });

  // Get category name by ID
  const getCategoryName = (catId: string) => {
    const category = categories.find(cat => cat.id === catId);
    return category ? category.name : catId;
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
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Research Reviews</h1>

      {/* Search and filters */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Search input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search reviews..."
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
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, !showAll ? 10 : categories.length).map((category, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category.slug
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              )
            })}
            <div onClick={() => setShowALl(!showAll)} className="flex items-center underline cursor-pointer text-blue-600">Show {showAll?'less...':'more...'}</div>
          </div>
        </div>

        {/* Tag filters */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagToggle(tag.id)}
                className={`px-3 py-1 rounded-full text-sm ${selectedTags.includes(tag.id)
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

      {/* Results count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredAndSortedPosts.length} {filteredAndSortedPosts.length === 1 ? 'review' : 'reviews'}
        {selectedCategory && ` in ${getCategoryName(selectedCategory)}`}
      </p>

      {/* Featured post */}
      {filteredAndSortedPosts.length > 0 && (
        <div className="mb-12">
          <BlogCard post={filteredAndSortedPosts[0]} variant="featured" />
        </div>
      )}

      {/* Post grid */}
      {filteredAndSortedPosts.length > 1 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPosts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : filteredAndSortedPosts.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No reviews found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria to find what you&apos;re looking for.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('');
              setSelectedTags([]);
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Clear all filters
          </button>
        </div>
      ) : null}
    </div>
  );
}