import { NextRequest, NextResponse } from 'next/server';

// POST /api/auth/logout - User logout
export async function POST() {
  try {
    // In a real app, we would invalidate the JWT token and clear the cookie
    // For this mock implementation, we'll just return a success message
    // The frontend would be responsible for removing the token from localStorage

    return NextResponse.json({
      message: 'Logout successful'
    });
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}