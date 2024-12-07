import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import { formatDate } from '../utils/dateFormatter';
import PostCategory from '../components/post/PostCategory';

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <PostCategory category={post.category} />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex justify-center">
           <img src={post.image} alt={post.title} />
          </div>
        </div>
        <div className="mt-12 prose prose-indigo prose-lg mx-auto">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}