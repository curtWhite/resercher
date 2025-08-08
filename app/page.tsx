"use client";

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import BlogCard from '@/app/components/blog/blog-card';
import { BlogPost, ResearchPaper, Category } from '@/app/types';

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [recentPapers, setRecentPapers] = useState<ResearchPaper[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchData() {
      try {
        setIsLoading(true);
        
        // Fetch posts, papers, and categories in parallel
        const [postsRes, papersRes, categoriesRes] = await Promise.all([
          fetch('/api/posts?limit=10'),
          fetch('/api/papers?limit=5'),
          fetch('/api/categories')
        ]);
        
        if (!postsRes.ok || !papersRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const [postsData, papersData, categoriesData] = await Promise.all([
          postsRes.json(),
          papersRes.json(),
          categoriesRes.json()
        ]);

        console.log('Posts Data:', postsData);
        console.log('Papers Data:', papersData);
        console.log('Categories Data:', categoriesData);
        
        // Get featured and recent posts
        const posts = postsData.items || [];
        const featuredPost = posts.filter((post: BlogPost) => post.featured).slice(0, 3);
        const nonFeaturedPosts = posts.filter((post: BlogPost) => !post.featured);
        
        
        return {
          featuredPosts: featuredPost,
          recentPosts: nonFeaturedPosts.slice(0, 6),
          recentPapers: papersData.data || [],
          categories: categoriesData || []
        };
        
      } catch (err: any) {
        setError(err.message || 'Failed to load data');
        console.error(err);
      } finally {
        
      }
    }

  useEffect(() => {    
    fetchData().then((res) => {
      if (res) {
        setFeaturedPosts(res.featuredPosts);
        setRecentPosts(res.recentPosts);
        setRecentPapers(res.recentPapers);
        setCategories(res.categories);
      }
    }).finally(() => {
      setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    console.log('Featured Posts:', featuredPosts);
    console.log('Recent Posts:', recentPosts);
    console.log('Recent Papers:', recentPapers);
    console.log('Categories:', categories);
  }, [featuredPosts, recentPosts, recentPapers, categories]);
  
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
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Research Review Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover, analyze, and discuss the latest research papers and scientific breakthroughs
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/reviews"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition"
              >
                Browse Reviews
              </Link>
              <Link
                href="/papers"
                className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition"
              >
                Explore Papers
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured posts section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-10">
            <h2 className="text-3xl font-bold">Featured Reviews</h2>
            <Link href="/reviews" className="text-blue-600 hover:underline font-medium">
              View all reviews →
            </Link>
          </div>
          
          {featuredPosts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className={index === 0 ? "lg:col-span-2" : ""}>
                  <BlogCard post={post} variant={index === 0 ? "featured" : "default"} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Recent content section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent posts */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-2xl font-bold">Recent Reviews</h2>
                <Link href="/reviews" className="text-blue-600 hover:underline font-medium">
                  View all →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Recent papers */}
              <div className="mb-12">
                <div className="flex justify-between items-baseline mb-6">
                  <h3 className="text-xl font-bold">Latest Research Papers</h3>
                  <Link href="/papers" className="text-blue-600 hover:underline font-medium text-sm">
                    View all →
                  </Link>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {recentPapers.map((paper, index) => (
                    <div 
                      key={paper.id} 
                      className={`p-4 ${index < recentPapers.length - 1 ? 'border-b' : ''}`}
                    >
                      <h4 className="font-semibold mb-1">
                        <Link href={`/papers/${paper.id}`} className="hover:text-blue-600 transition">
                          {paper.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        {formatDate(paper.publicationDate)}
                      </p>
                      <p className="text-gray-600 text-sm">{paper.authors.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold mb-6">Explore Categories</h3>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <Link 
                        key={category.id}
                        href={`/categories/${category.id}`}
                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Research Community</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Sign up to contribute your own reviews, discuss papers with other researchers,
            and stay updated on the latest developments in your field.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}