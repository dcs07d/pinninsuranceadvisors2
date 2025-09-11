import React from 'react';
import { User, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <User className="w-4 h-4 mr-1" />
          <span className="mr-4">{post.author}</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span>{post.date}</span>
        </div>
        <Link 
          to={`/resources/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors group"
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}