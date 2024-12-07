import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/dateFormatter';
import PostCategory from './PostCategory';

export default function PostCard({ post }) {
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          className="h-48 w-full object-cover sm:h-56 md:h-64 lg:h-72"
          src={post.image}
          alt={post.title}
        />
      </div>
      {/* Content Section */}
      <div className="p-4 sm:p-6">
        {/* Category */}
        <div>
          <PostCategory category={post.category} />
        </div>
        {/* Title and Excerpt */}
        <Link to={`/post/${post.slug}`} className="block mt-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-indigo-600">
            {post.title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-500">{post.excerpt}</p>
        </Link>
        {/* Date and Read Time */}
        <div className="mt-4 flex space-x-1 text-xs sm:text-sm text-gray-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
