// Common types
export type ID = string;
export type DateTime = string;

// User related types
export interface User {
  id: ID;
  _id?:ID;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  password: string; 
}

export interface UserUpdateData {
  name?: string;
  email?: string;
  avatarUrl?: string;
  bio?: string;
}

// Blog post related types
export interface BlogPost {
  status: string;
  _id?: ID; // Optional for MongoDB ObjectId
  id: ID;
  title: string;
  content: string;
  excerpt: string;
  coverImageUrl?: string;
  userId: ID;
  categoryIds: ID[];
  tagIds: ID[];
  paperId?: ID;
  publishedAt?: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
  published: boolean;
  featured?: boolean; // Optional field for featured posts
}

export interface BlogPostCreateData {
  title: string;
  content: string;
  excerpt: string;
  coverImageUrl?: string;
  userId: ID;
  categoryIds: ID[];
  tagIds: ID[];
  paperId?: ID;
  published?: boolean;
  publishedAt?: DateTime; // Optional, if not provided will default to now
}

export interface BlogPostUpdateData {
  title?: string;
  content?: string;
  excerpt?: string;
  coverImageUrl?: string;
  categoryIds?: ID[];
  tagIds?: ID[];
  paperId?: ID;
  published?: boolean;
}

// Research paper related types
export interface ResearchPaper {
  _id?: ID; // Optional for MongoDB ObjectId
  pages: string;
  issue: any;
  volume: any;
  citations: string[];
  externalUrl: string;
  keywords: string[];
  id: ID;
  title: string;
  authors: string[];
  pdfUrl: string;
  abstract: string;
  doi?: string;
  journal?: string;
  publicationDate?: string;
  userId: ID;
  uploadedAt: DateTime;
}

export interface PaperMetadata {
  _id?: ID; // Optional for MongoDB ObjectId
  title: string;
  authors: string[];
  abstract: string;
  doi?: string;
  journal?: string;
  publicationDate?: string;
  userId: ID;
}

// Category related types
export interface Category {
  _id: any;
  id: ID;
  name: string;
  description: string;
  slug: string;
  parent?:string | null; // For nested categories
}

export interface CategoryCreateData {
  name: string;
  description: string;
  slug: string;
}

export interface CategoryUpdateData {
  id?: string;
  name?: string;
  description?: string;
  slug?: string;
}

// Tag related types
export interface Tag {
  id: ID;
  name: string;
  slug: string;
}

export interface TagCreateData {
  name: string;
  slug: string;
}

export interface TagUpdateData {
  name?: string;
  slug?: string;
}

// Comment related types
export interface Comment {
  _id?: ID; // Optional for MongoDB ObjectId
  id: ID;
  content: string;
  userId: ID;
  postId: ID;
  parentId?: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
  user?: User; // Optional, populated when fetching comments
}

export interface CommentCreateData {
  id?: string;
  content: string;
  userId: ID;
  postId: ID;
  parentId?: ID;
}

export interface CommentUpdateData {
  id?: string;
  content: string;
}

// Query parameter types
export interface PostQueryParams {
  page?: number;
  limit?: number;
  categoryId?: ID;
  tagId?: ID;
  userId?: ID;
  query?: string;
}

export interface PaperQueryParams {
  page?: number;
  limit?: number;
  userId?: ID;
  query?: string;
}

// Pagination types
export interface PaginatedPosts {
  items: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedPapers {
  items: ResearchPaper[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Search related types
export interface SearchResults {
  posts: BlogPost[];
  papers: ResearchPaper[];
}

// Auth related types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}