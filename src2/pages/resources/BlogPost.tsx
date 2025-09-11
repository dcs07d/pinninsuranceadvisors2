import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import MainNav from '../../components/navigation/MainNav';
import Footer from '../../components/layout/Footer';
import BlogPostView from '../../components/blog/BlogPost';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '', 10));

  if (!post) {
    return <Navigate to="/resources/blog" replace />;
  }

  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <BlogPostView post={post} />
        </div>
      </main>
      <Footer />
    </div>
  );
}