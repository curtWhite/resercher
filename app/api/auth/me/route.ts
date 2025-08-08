import { NextRequest, NextResponse } from 'next/server';
import { Users } from '@/app/lib/db';

// GET /api/auth/me - Get current authenticated user
export async function GET(request: NextRequest) {
  try {
    // In a real application, we would extract the user ID from the JWT token
    // For this mock implementation, we'll extract it from the Authorization header
    
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const token = authHeader.split(' ')[1];
    
    // Mock token verification
    // In a real app, we would verify the JWT and extract the user ID
    // Format: mock-jwt-token-{userId}
    if (!token.startsWith('mock-jwt-token-')) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
    
    const userId = token.replace('mock-jwt-token-', '');
    
    const user = await Users.findById(userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    // Don't return the password
    const { password, ...userWithoutPassword } = user;
    
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('Error fetching current user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}