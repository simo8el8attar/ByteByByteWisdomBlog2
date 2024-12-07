import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import PostCategory from '../components/post/PostCategory';
import slugify from 'slugify'; // Import slugify
const generateSlug = (title) => slugify(title, { lower: true, strict: true });
export default function PostDetail() {
  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug)
  const normalizedPosts = posts.map(post => ({
    ...post,
    slug: generateSlug(post.title), // Generate slugs dynamically
  }));
  const post = normalizedPosts.find(p => p.slug === decodedSlug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  const additionalContent = post.additionalContent || [];

  return (
    <div
      className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <PostCategory category={post.category} />
          <h1
            className="mt-4 text-3xl font-extrabold sm:text-4xl"
          >
            {post.title}
          </h1>
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
          {additionalContent.map((item, idx) =>
            item.type === 'image' ? (
              <img key={idx} src={item.src} alt="Additional content" className="my-4 max-w-full" />
            ) : item.type === 'text' ? (
              <p key={idx} className="my-4">{item.content}</p>
            ) : null
          )}
        </div>
      </article>
    </div>
  );
}
