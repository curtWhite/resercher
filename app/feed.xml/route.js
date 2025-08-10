import RSS from "rss";
import { BlogPosts } from "../lib/db";
import { getSiteMetadata } from "../lib/site";

export async function GET() {
    const metadata = await getSiteMetadata();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const reviews = await BlogPosts.getAll();

    const feed = new RSS({
        title: metadata.title,
        description: metadata.description,
        feed_url: `${baseUrl}/feed.xml`,
        site_url: baseUrl,
        copyright: `${new Date().getFullYear()} ${metadata.title}`,
        language: metadata.language,
        pubDate: new Date(),

    })


    reviews.forEach((review) => {
        feed.item({
            title: review.title,
            description: review.summary,
            url: `${baseUrl}/reviews/${review._id}`,
            guid: `${baseUrl}/reviews/${review._id}`,
            date: new Date(review.updatedAt),
            description: review.excerpt,
            categories: review.categoryIds
        })
    })

    return new Response(feed.xml(), {
        headers: {
            "Content-Type": "application/atom+xml; charset=utf-8",
        },
    })
}