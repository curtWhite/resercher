"use client";

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  
  // Mock authentication state - in a real app, this would be from a context or auth hook
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>();

  useEffect(() => {
    // Check if user is authenticated on mount
    setIsAuthenticated(auth.isAuthenticated);
    if (auth.user) {
      console.log('Authenticated user:', auth.user, isAuthenticated);
    } else {
      console.log('No authenticated user found');
    }
  }, [auth.user, auth.isAuthenticated]);


  useEffect(() => {},[isAuthenticated]);


  const mockUser = {
    name: "Dr. Alex Johnson",
    avatarUrl: "/images/avatar.jpg",
  };
  
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        // In a real app, this would clear auth tokens/state
        setIsAuthenticated(false);
        router.push('/');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
    
    setIsUserMenuOpen(false);
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            ResearchReviews
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition">
              Reviews
            </Link>
            <Link href="/papers" className="text-gray-700 hover:text-blue-600 transition">
              Papers
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition">
              Categories
            </Link>
            <Link href="/upload" className="text-gray-700 hover:text-blue-600 transition">
              Submit Review
            </Link>
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => router.push('/search')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  className="flex items-center focus:outline-none"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <span className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 mr-2">
                    {mockUser.avatarUrl ? (
                      <img 
                        src={mockUser.avatarUrl} 
                        alt={mockUser.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </span>
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
                    <Link 
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link 
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4 items-center">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Sign in
                </Link>
                <Link 
                  href="/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Sign up
                </Link>
              </div>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href="/search" className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            
            <button 
              className="text-gray-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/reviews" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="/papers" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Papers
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/upload" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit Review
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    href="/profile" 
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link 
                    href="/dashboard" 
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    className="text-left text-gray-700 hover:text-blue-600"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-2 border-t">
                  <Link 
                    href="/login" 
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link 
                    href="/register" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}