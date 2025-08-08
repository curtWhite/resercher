'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    bio?: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    password?: string; // Optional, not used in client-side code
}

interface User {
    message: string;
    user: UserData ;
    token: string; // JWT token or similar
    // Add other user fields as needed
}


interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Mock login function - in a real app, this would call an API
    // and set the user state based on the response
    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const userData: User = JSON.parse(storedUser);
                // Optionally, validate user session with API
                fetch('/api/auth/login/validate', {
                    method: 'GET',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userData.token}` // Assumes userData has a token property
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('User validation response:', data);
                        if (data.user) {
                            setUser(userData);
                            setIsAuthenticated(true);
                        } else {
                            setUser(null);
                            localStorage.removeItem('user');
                            setIsAuthenticated(false);
                        }
                    })
                    .catch(() => {
                        setUser(null);
                        localStorage.removeItem('user');
                        setIsAuthenticated(false);
                    });
            } catch {
                setUser(null);
                localStorage.removeItem('user');
                setIsAuthenticated(false);
            }
        }
    }, []);

    async function login(email: string, password: string) {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.error('Login response:', data);
        if (!response.ok) {
            throw new Error(data.message || 'Failed to log in');
        }
        setUser(data);
        setIsAuthenticated(true);
        // Optionally, persist user data to localStorage/sessionStorage here
        localStorage.setItem('user', JSON.stringify(data));
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        // Optionally, remove user data from storage here
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};