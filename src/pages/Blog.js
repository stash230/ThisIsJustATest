// File: src/pages/Blog.js
import React from 'react';

function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
      <div className="grid gap-6">
        <div className="border p-4 rounded shadow">
          <img src="https://via.placeholder.com/400x200" alt="Post 1" className="mb-2 w-full object-cover rounded" />
          <h2 className="text-xl font-semibold">First Blog Entry</h2>
          <p className="text-sm text-gray-700">This is a sample blog post. More content and features will be added soon.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <img src="https://via.placeholder.com/400x200" alt="Post 2" className="mb-2 w-full object-cover rounded" />
          <h2 className="text-xl font-semibold">Second Blog Entry</h2>
          <p className="text-sm text-gray-700">Another placeholder post. Future updates may include markdown rendering, tags, and comments.</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
