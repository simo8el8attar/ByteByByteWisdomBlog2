import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function PostCard({ post }) {
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image section */}
      <div className="relative">
        <img
          className="h-48 w-full object-cover sm:h-56 md:h-64 lg:h-72"
          src={post.image}
          alt={post.title}
        />
      </div>
      {/* Content section */}
      <div className="p-4 sm:p-6">
        {/* Category badge */}
        <div>
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {post.category}
          </span>
        </div>
        {/* Title and excerpt */}
        <Link to={`/post/${post.slug}`} className="block mt-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-indigo-600">
            {post.title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-500">{post.excerpt}</p>
        </Link>
        {/* Date and read time */}
        <div className="mt-4 flex space-x-1 text-xs sm:text-sm text-gray-500">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
