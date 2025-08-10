import { NextRequest, NextResponse } from 'next/server';
import { Users} from '@/app/lib/db';


// GET /api/auth/login/validate - Validate if user is logged in (mock implementation)
export async function GET(request: NextRequest) {
  try {
    // In a real app, you would extract and verify a JWT from cookies or headers
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer jwt-token-')) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Extract user ID from the mock token
    const userId = authHeader.replace('Bearer jwt-token-', '').trim();
    console.log('Validating user with ID:', userId);
    const user = await Users.findById(userId);
    console.log('User:', user);


    if (!user?._id) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json({
      message: 'User is authenticated',
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Error during authentication validation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}