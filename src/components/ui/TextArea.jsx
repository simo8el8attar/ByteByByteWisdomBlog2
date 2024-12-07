import React from 'react';

export default function TextArea({ label, id, rows = 4, className = '', ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          id={id}
          rows={rows}
          className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}