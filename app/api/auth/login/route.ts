import { NextRequest, NextResponse } from 'next/server';
import { checkHashedPassword, Users } from '@/app/lib/db';


// POST /api/auth/login - User login
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user with matching email
    const u = await Users.findByEmail(email);
    const user = u[0] || null;
    
    if (user === null) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check password (in a real app, we would compare hashed passwords)
    if (await checkHashedPassword(password, user.password) === false) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // In a real app, we would create a JWT token and set it in a secure HTTP-only cookie
    // For this mock implementation, we'll just return the user data (minus the password)
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      message: 'Login successful',
      user: userWithoutPassword,
      // Mock token - in a real app, this would be a real JWT
      token: `jwt-token-${user._id}`
    });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

