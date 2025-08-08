"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { User, BlogPost } from '@/app/types';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [userPosts, setUserPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('reviews');
  const [error, setError] = useState('');
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        setIsLoading(true);
        
        // Fetch current user data
        const userRes = await fetch('/api/auth/me');
        
        if (!userRes.ok) {
          // Not logged in, redirect to login
          if (userRes.status === 401) {
            router.push('/login?redirect=profile');
            return;
          }
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await userRes.json();
        setUser(userData.data);
        
        // Fetch user's posts if user exists
        if (userData.data) {
          const postsRes = await fetch(`/api/users/${userData.data.id}/posts`);
          if (postsRes.ok) {
            const postsData = await postsRes.json();
            setUserPosts(postsData.data || []);
          }
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load user data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchUserData();
  }, [router]);
  
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      // Redirect to home after successful logout
      router.push('/');
      router.refresh();
    } catch (err) {
      console.error('Error during logout:', err);
    }
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
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Please log in to view your profile</h2>
        <p className="mb-8">You need to be logged in to access this page.</p>
        <Link
          href="/login?redirect=profile"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
        >
          Log In
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            {/* User info */}
            <div className="text-center mb-6">
              <div className="mb-4">
                {user.avatarUrl ? (
                  <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="h-24 w-24 rounded-full mx-auto object-cover"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full mx-auto bg-blue-600 flex items-center justify-center text-white text-2xl font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              {user.createdAt && (
                <p className="text-sm text-gray-500 mt-1">
                  Member since {formatDate(user.createdAt)}
                </p>
              )}
            </div>
            
            {/* Navigation */}
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('reviews')}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'reviews' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                My Reviews
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'saved' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                Saved Papers
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                Account Settings
              </button>
              <hr className="my-4" />
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 rounded-md text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="lg:col-span-3">
          {activeTab === 'reviews' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">My Reviews</h2>
                <Link
                  href="/reviews/new"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  New Review
                </Link>
              </div>
              
              {userPosts.length > 0 ? (
                <div className="space-y-6">
                  {userPosts.map((post) => (
                    <div key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold mb-2">
                            <Link href={`/reviews/${post.id}`} className="hover:text-blue-600">
                              {post.title}
                            </Link>
                          </h3>
                          <div className="flex space-x-2">
                            <Link
                              href={`/reviews/edit/${post.id}`}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Edit
                            </Link>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-2">
                          {post.publishedAt ? 
                            `Published on ${formatDate(post.publishedAt)}` : 
                            `Draft created on ${formatDate(post.createdAt)}`
                          }
                        </p>
                        
                        <p className="text-gray-700 mb-4">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <span className="text-sm text-gray-500">
                              {post.status === 'published' ? 
                                <span className="text-green-600">Published</span> : 
                                <span className="text-yellow-600">Draft</span>
                              }
                            </span>
                          </div>
                          <Link
                            href={`/reviews/${post.id}`}
                            className="text-blue-600 font-medium hover:text-blue-800"
                          >
                            View Review →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white shadow rounded-lg p-8 text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No reviews yet</h3>
                  <p className="text-gray-600 mb-6">
                    You haven&apos;t created any reviews yet. Start sharing your insights on research papers!
                  </p>
                  <Link
                    href="/reviews/new"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Write Your First Review
                  </Link>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'saved' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Saved Papers</h2>
              <div className="bg-white shadow rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No saved papers</h3>
                <p className="text-gray-600 mb-6">
                  You haven&apos;t saved any research papers yet. Browse papers and save them for later reading!
                </p>
                <Link
                  href="/papers"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Browse Papers
                </Link>
              </div>
            </>
          )}
          
          {activeTab === 'settings' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Profile Information</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        defaultValue={user.name}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        defaultValue={user.email}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        rows={4}
                        defaultValue={user.bio}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Tell us about yourself..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
                
                <div className="p-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        id="currentPassword"
                        type="password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        id="confirmNewPassword"
                        type="password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
                
                <div className="p-6 border-t bg-red-50">
                  <h3 className="text-lg font-medium text-red-700 mb-2">Danger Zone</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-red-600 text-red-600 rounded hover:bg-red-50"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}