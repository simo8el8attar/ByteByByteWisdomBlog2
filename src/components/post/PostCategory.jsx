import React from 'react';

export default function PostCategory({ category }) {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
      {category}
    </span>
  );
}