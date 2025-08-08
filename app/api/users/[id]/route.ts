import { NextRequest, NextResponse } from 'next/server';
import { Users, users } from '@/app/lib/db';
import { UserUpdateData } from '@/app/types';


const _users = new Users();



// GET /api/users/[id] - Get a specific user by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const user = await Users.findById(id);

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
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/users/[id] - Update a specific user by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data: UserUpdateData = await request.json();

    const userIndex = await Users.findById(id);

    if (!userIndex?._id) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if the new email already exists and is not the same user
    if (data.email) {
      const user_by_email = await Users.findByEmail(data.email);
      if (user_by_email && user_by_email.length > 0) {
        return NextResponse.json(
          { error: 'A user with this email already exists' },
          { status: 409 }
        );
      }


      const now = new Date().toISOString();
      const user = user_by_email[0]
      const updatedUser = {
        ...user,
        ...data,
        updatedAt: now,
        // Don't allow updating id or createdAt
        // id: user._id,
        createdAt: user.createdAt
      };

      // Update the user in our in-memory array
      await Users.update(id, updatedUser);

      // Don't return the password
      const { password, ...userWithoutPassword } = updatedUser;
      return NextResponse.json(userWithoutPassword);

    }

  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/users/[id] - Delete a specific user by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const userIndex = await Users.findById(id);

    if (!userIndex?._id) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Remove the user from our in-memory array
    return await Users.delete(id).then(( result) => {
      if (!result.acknowledged) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        );
      }else {
        return NextResponse.json(
          { message: 'User deleted successfully' },
          { status: 200 }
        );
      }
  })

    
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}