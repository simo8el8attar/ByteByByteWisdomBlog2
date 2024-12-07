import React from 'react';
export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            About DevBlog
          </h1>
          <div className="prose prose-indigo prose-lg text-gray-500">
            <p>
              Welcome to DevBlog, your go-to resource for web development insights, 
              programming tips, and technology trends. Our mission is to provide 
              high-quality content that helps developers grow and stay updated with 
              the latest in tech.
            </p>
            <p>
              Founded in 2023, we've been committed to sharing knowledge and 
              fostering a community of developers who are passionate about creating 
              amazing web experiences.
            </p>
            <h2>Our Mission</h2>
            <p>
              We believe in making web development knowledge accessible to everyone. 
              Through our articles, tutorials, and guides, we aim to help developers 
              of all skill levels improve their craft and build better applications.
            </p>
            <h2>Meet the Team</h2>
            <p>
              Our team consists of passionate developers, designers, and tech 
              enthusiasts who love sharing their knowledge and experiences with 
              the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}