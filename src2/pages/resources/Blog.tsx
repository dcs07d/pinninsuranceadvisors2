import React from 'react';
import ResourceLayout from '../../components/layout/ResourceLayout';
import BlogCarousel from '../../components/blog/BlogCarousel';
import { blogPosts } from '../../data/blogPosts';

export default function Blog() {
  return (
    <ResourceLayout 
      title="Medicare Blog"
      description="Expert insights and updates about Medicare coverage, benefits, and healthcare."
    >
      <div className="max-w-6xl mx-auto">
        <BlogCarousel posts={blogPosts} />
      </div>
    </ResourceLayout>
  );
}