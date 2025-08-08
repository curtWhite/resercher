"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BlogPost, ResearchPaper, User, Comment, Category, Tag } from '@/app/types';
import { useAuth } from '@/app/context/auth';
import { marked } from 'marked';
import DOMPurify from 'dompurify';


async function renderMarkdownToHTML(markdownText: string) {
  const dirty = await marked(markdownText);
  return DOMPurify.sanitize(dirty);
}

export default function ReviewDetailPage() {
  const params = useParams();
  const router = useRouter();
  const auth = useAuth();
  const postId = params.id as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [paper, setPaper] = useState<ResearchPaper | null>(null);
  const [author, setAuthor] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPdf, setShowPdf] = useState(false);

  // New comment form state
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock authentication state
  const [mackdown, setMackDown] = useState(''); // Mock authentication state

  useEffect(() => {
    setIsAuthenticated(auth.isAuthenticated);
  }, [auth.isAuthenticated]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        // Fetch post details
        const postRes = await fetch(`/api/posts/${postId}`);
        if (!postRes.ok) {
          if (postRes.status === 404) {
            router.push('/404');
            return;
          }
          throw new Error('Failed to fetch post');
        }

        const postData = await postRes.json();
        setPost(postData);

        // Fetch related data if post exists
        if (postData.data) {
          // Fetch categories and tags in parallel
          const [categoriesRes, tagsRes] = await Promise.all([
            fetch('/api/categories'),
            fetch('/api/tags')
          ]);

          if (categoriesRes.ok && tagsRes.ok) {
            const [categoriesData, tagsData] = await Promise.all([
              categoriesRes.json(),
              tagsRes.json()
            ]);

            setCategories(categoriesData.data || []);
            setTags(tagsData.data || []);
          }

          // Fetch author details
          if (postData.data.userId) {
            const authorRes = await fetch(`/api/users/${postData.data.userId}`);
            if (authorRes.ok) {
              const authorData = await authorRes.json();
              setAuthor(authorData.data);
            }
          }

          // Fetch associated paper if exists
          if (postData.data.paperId) {
            const paperRes = await fetch(`/api/papers/${postData.data.paperId}`);
            if (paperRes.ok) {
              const paperData = await paperRes.json();
              setPaper(paperData.data);
            }
          }

          // Fetch comments
          const commentsRes = await fetch(`/api/posts/${postId}/comments`);
          if (commentsRes.ok) {
            const commentsData = await commentsRes.json();
            setComments(commentsData.data || []);
          }

          // Fetch related posts (posts with same categories or tags)
          if (postData.data.categoryIds?.length || postData.data.tagIds?.length) {
            const relatedRes = await fetch('/api/posts?limit=3');
            if (relatedRes.ok) {
              const relatedData = await relatedRes.json();
              // Filter out current post and limit to 3
              const filtered = (relatedData.data || [])
                .filter((p: BlogPost) => p.id !== postId)
                .slice(0, 3);
              setRelatedPosts(filtered);
            }
          }
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load post');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [postId, router]);

  useEffect(() => {
    if (post) {
      // Convert markdown content to HTML
      renderMarkdownToHTML(post.content).then(html => {
        setMackDown(html);
      })
    }
  }, [post]);




  // Handle new comment submission
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: commentText,
          postId: postId,
          // In a real app, userId would come from auth context
          userId: 'user1',
        }),
      });

      if (!response.ok) throw new Error('Failed to submit comment');

      const data = await response.json();

      // Add new comment to the list
      setComments(prevComments => [...prevComments, data.data]);
      setCommentText('');
    } catch (err: any) {
      console.error('Error submitting comment:', err);
      alert('Failed to submit comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to find category name by id
  const getCategoryName = (catId: string) => {
    const category = categories.find(cat => cat.id === catId);
    return category ? category.name : '';
  };

  // Helper to find tag name by id
  const getTagName = (tagId: string) => {
    const tag = tags.find(tag => tag.id === tagId);
    return tag ? tag.name : '';
  };

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

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">{error || 'Post not found'}</p>
          <Link href="/reviews" className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Back to Reviews
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
            <Link href="/reviews" className="text-gray-500 hover:text-blue-600">
              Reviews
            </Link>
          </li>
          <li className="text-gray-800">
            <span className="mx-2">/</span>
            <span>Current Review</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Cover Image */}
          {post.coverImageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Title and metadata */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center mb-4 text-gray-600">
              {post.publishedAt && (
                <span className="mr-4">
                  {formatDate(post.publishedAt)}
                </span>
              )}

              {author && (
                <div className="flex items-center">
                  {author.avatarUrl && (
                    <img
                      src={author.avatarUrl}
                      alt={author.name}
                      className="h-8 w-8 rounded-full mr-2"
                    />
                  )}
                  <span>{author.name}</span>
                </div>
              )}
            </div>

            {/* Categories and tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categoryIds?.map(catId => (
                <Link
                  key={catId}
                  href={`/categories/${catId}`}
                  className="inline-block bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full"
                >
                  {getCategoryName(catId)}
                </Link>
              ))}

              {post.tagIds?.map(tagId => (
                <Link
                  key={tagId}
                  href={`/tags/${tagId}`}
                  className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {getTagName(tagId)}
                </Link>
              ))}
            </div>
          </div>

          {/* Post content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl font-medium text-gray-600 mb-6">
              {post.excerpt}
            </p>

            <div dangerouslySetInnerHTML={{ __html: mackdown }} />
          </div>

          {/* Paper section */}
          {paper && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold mb-4">Research Paper</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">{paper.title}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Journal:</span> {paper.journal}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">DOI:</span> {paper.doi}
                </p>
                <p className="text-gray-700">{paper.abstract}</p>
              </div>

              <div className="flex space-x-4">
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
              </div>
            </div>
          )}

          {/* PDF Viewer */}
          {showPdf && paper?.pdfUrl && (
            <div className="mb-12">
              {/* <PdfViewer pdfUrl={paper.pdfUrl} /> */}
            </div>
          )}

          {/* Comments section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Comments</h2>

            {/* Comment form */}
            {isAuthenticated ? (
              <div className="mb-8">
                <form onSubmit={handleCommentSubmit}>
                  <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                      Leave a comment
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Share your thoughts about this review..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting || !commentText.trim()}
                      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${(isSubmitting || !commentText.trim()) ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="mb-8 bg-gray-50 p-6 rounded-lg text-center">
                <p className="mb-4">Please sign in to leave a comment</p>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Sign in
                </Link>
              </div>
            )}

            {/* Comments list */}
            {comments.length > 0 ? (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        {/* This would fetch user avatar dynamically in a real app */}
                        <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                        <span className="font-medium">{comment.userId}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {comment.createdAt && formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No comments yet. Be the first to comment!</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Author info */}
          {author && (
            <div className="bg-white shadow rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                {author.avatarUrl && (
                  <img
                    src={author.avatarUrl}
                    alt={author.name}
                    className="h-12 w-12 rounded-full mr-3"
                  />
                )}
                <div>
                  <p className="font-medium">{author.name}</p>
                </div>
              </div>
              {author.bio && <p className="text-gray-600 mb-4">{author.bio}</p>}
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Related Reviews</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="border-b pb-4 last:border-0 last:pb-0">
                    {relatedPost.coverImageUrl && (
                      <img
                        src={relatedPost.coverImageUrl}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                    )}
                    <h4 className="font-medium mb-1">
                      <Link
                        href={`/reviews/${relatedPost.id}`}
                        className="hover:text-blue-600 transition"
                      >
                        {relatedPost.title}
                      </Link>
                    </h4>
                    {relatedPost.publishedAt && (
                      <p className="text-sm text-gray-500">
                        {formatDate(relatedPost.publishedAt)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}