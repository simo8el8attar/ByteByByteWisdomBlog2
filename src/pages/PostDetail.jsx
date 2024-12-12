import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts.jsx';
import PostCategory from '../components/post/PostCategory';
import slugify from 'slugify'; // Import slugify

const generateSlug = (title) => slugify(title, { lower: true, strict: true });

export default function PostDetail() {
  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug);

  // Normalize posts with slugs
  const normalizedPosts = posts.map(post => ({
    ...post,
    slug: post.slug || generateSlug(post.title), // Generate slug if not already available
  }));

  const post = normalizedPosts.find(p => p.slug === decodedSlug);

  // Log an error for debugging if post not found
  if (!post) {
    console.error(`Post not found for slug: ${decodedSlug}`);
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  // Set dynamic page title
  useEffect(() => {
    document.title = `${post.title} - Your Site Name`;
  }, [post]);

  const additionalContent = post.additionalContent || [];

  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <PostCategory category={post.category} />
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
          {post.image && (
            <div className="mt-4 flex justify-center flex-wrap gap-4">
              {post.image.map((img, idx) => (
                <img key={idx} src={img} alt={post.title} className="max-w-full rounded-lg" />
              ))}
            </div>
          )}
        </div>
              <div className="mt-12 prose prose-lg mx-auto">
        <p>{post.content}</p>
        {additionalContent.map((item, idx) => {
          if (item.type === 'image') {
            return (
              <img
                key={idx}
                src={item.src}
                alt="Additional content"
                className="my-4 max-w-full"
              />
            );
          } else if (item.type === 'text') {
            return (
              <p key={idx} className="my-4">
                {item.content}
              </p>
            );
          } else if (item.type === 'title') {
            return (
              <h2 key={idx} className="my-4">
                {item.content}
              </h2>
            );
          } else if (item.type === 'link') {
            return (
              <a key={idx} href={item.linkA} className="my-4 text-blue-500 underline">
                {item.linkA}
              </a>
            );
          }else if (item.type === 'custom') {
            // Directly render custom JSX elements
            return (
              <div key={idx} className="my-4">
                {item.content} {/* `item.content` should contain JSX elements */}
              </div>
            );
          }
          return null;
        })}
      </div>

      </article>
    </div>
  );
}
