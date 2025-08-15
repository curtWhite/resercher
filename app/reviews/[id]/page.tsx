import { Metadata, ResolvingMetadata } from 'next';
import { getSiteMetadata } from '@/app/lib/site';
import ReviewDetailPage from './pageContent';

export async function generateMetadata(
  { params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | string[] | undefined } },
  parent: ResolvingMetadata
): Promise<Metadata> {

  const _metadata = getSiteMetadata();
  const postId = params.id as string;

  // Fetch the post data to get title and description
  const postRes = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/posts/${postId}`);
  const post = await postRes.json();
  return {
    title: post.title || post.title || _metadata.title,
    description: post.excerpt.slice(0,100) || post.excerpt.slice(0,100) || _metadata.description,
    metadataBase: new URL(_metadata.url),
    openGraph: {
      title: post.title || _metadata.title,
      description: post.excerpt.slice(0,100) || _metadata.description,
      url: _metadata.siteurl,
      siteName: post.title || _metadata.title,
      images: [
        {
          url: post.coverImageUrl || `${_metadata.siteurl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title || _metadata.title,
        },
      ],
      locale: _metadata.language,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title || _metadata.title,
      description: post.excerpt.slice(0,100) || _metadata.description,
      images: [post.coverImageUrl || `${_metadata.siteurl}/og-image.jpg`],
    }
  }

}

export default async function PageContent({ params }: { params: { id: string } }) {

  return <ReviewDetailPage params={params} />
}