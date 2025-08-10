import { MetadataRoute } from "next";
import { BlogPosts, Comments, ResearchPapers } from "./lib/db";
import { BlogPost, Comment, ResearchPaper } from "./types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const papers = await ResearchPapers.getAll();
  const reviews = await BlogPosts.getAll();
  const comments = await Comments.getAll();

  const blogUrls = reviews.map((review: BlogPost) => ({
    url: `${baseUrl}/reviews/${review._id}`,
    lastModified: new Date(review.updatedAt).toISOString(),
    priority: 0.9,
    changeFrequency: "daily" as const,
  }));

  const papersUrls = papers.map((paper: ResearchPaper) => ({
    url: `${baseUrl}/papers/${paper._id}`,
    lastModified: new Date(paper.uploadedAt).toISOString(),
    priority: 0.8,
    changeFrequency: "daily" as const,
  }));
  const commentUrls = comments.map((comment: Comment) => ({
    url: `${baseUrl}/comments/${comment._id}`,
    lastModified: new Date(comment.updatedAt).toISOString(),
    priority: 0.5,
    changeFrequency: "daily" as const,
  }));
  const urls = [
    { url: '/', lastModified: new Date().toISOString(), priority: 1.0, changeFrequency: "daily" as const },
    ...blogUrls,
    ...papersUrls,
    ...commentUrls,
  ];

  return urls;
}