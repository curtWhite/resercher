import Link from 'next/link';
import { BlogPost } from '@/app/types';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact' | 'featured';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  // Format the date to a readable string
  const formattedDate = post.publishedAt ? 
    new Date(post.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : null;

  if (variant === 'compact') {
    return (
      <div className="border-b border-gray-200 pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
        <h3 className="text-lg font-semibold mb-1">
          <Link href={`/reviews/${post.id}`} className="hover:text-blue-600 transition">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          {formattedDate}
        </p>
        <p className="text-gray-700 line-clamp-2">{post.excerpt}</p>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {post.coverImageUrl && (
          <div className="relative h-80 w-full">
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mb-2">
            {post.categoryIds?.map((catId) => (
              <span 
                key={catId} 
                className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 mb-2"
              >
                {catId}
              </span>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            <Link href={`/reviews/${post.id}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-white/90 mb-3 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center">
            <Link 
              href={`/reviews/${post.id}`}
              className="text-white font-medium hover:underline"
            >
              Read full review →
            </Link>
            {formattedDate && (
              <span className="text-white/80 text-sm ml-auto">
                {formattedDate}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default card
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
      {post.coverImageUrl && (
        <div className="relative h-48 w-full">
          <img
            src={post.coverImageUrl}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.categoryIds?.map((catId) => (
            <span 
              key={catId} 
              className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
            >
              {catId}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/reviews/${post.id}`} className="hover:text-blue-600 transition">
            {post.title}
          </Link>
        </h3>
        {formattedDate && (
          <p className="text-sm text-gray-500 mb-2">
            {formattedDate}
          </p>
        )}
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        <Link 
          href={`/reviews/${post.id}`} 
          className="text-blue-600 font-medium hover:text-blue-800 transition mt-auto"
        >
          Read Full Review →
        </Link>
      </div>
    </div>
  );
}