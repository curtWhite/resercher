import { NextRequest, NextResponse } from 'next/server';
import { hashedPassword, Users } from '@/app/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@/app/types';

const _users = new Users();
// GET /api/users - Get all users
export async function GET() {
  try {
    const users = await Users.getAll();
    // In a real app, we might want to hide sensitive information like passwords
    // For this mock implementation, we'll return all user data
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/users - Create a new user
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await Users.findByEmail(data.email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 409 }
      );
    }

    const now = new Date().toISOString();

    const newUser: User = {
      id: uuidv4(),
      name: data.name,
      email: data.email,
      password: await hashedPassword(data.password), // In a real app, this would be hashed
      avatarUrl: data.avatarUrl || null,
      bio: data.bio || null,
      createdAt: now,
      updatedAt: now
    };

    // In a real app, we would save to a database
    // For now, we just add to our in-memory array
    // users.push(newUser);

    // Don't return the password
    const { password, ...userWithoutPassword } = newUser;
    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}