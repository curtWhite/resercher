import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/app/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@/app/types';

// POST /api/auth/register - Register a new user
export async function POST(request: NextRequest) {
  try {
    const { name, email, password, avatarUrl, bio } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 409 }
      );
    }

    const now = new Date().toISOString();

    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      password, // In a real app, this would be hashed
      avatarUrl: avatarUrl || null,
      bio: bio || null,
      createdAt: now,
      updatedAt: now
    };

    // In a real app, we would save to a database
    // For now, we just add to our in-memory array
    users.push(newUser);

    // Don't return the password
    const { password: _, ...userWithoutPassword } = newUser;
    
    return NextResponse.json({
      message: 'Registration successful',
      user: userWithoutPassword,
      // Mock token - in a real app, this would be a real JWT
      token: `mock-jwt-token-${newUser.id}`
    }, { status: 201 });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}