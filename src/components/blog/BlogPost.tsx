import React from 'react';
import { User, Calendar, Clock, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { Link } from 'react-router-dom';

interface BlogPostViewProps {
  post: BlogPost;
}

export default function BlogPostView({ post }: BlogPostViewProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/resources/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">{post.excerpt}</p>

        {post.content?.sections.map((section, index) => (
          <section key={index} className="mt-12">
            <h2>{section.title}</h2>
            <p>{section.content}</p>

            {section.painPoints && (
              <div className="bg-red-50 p-6 rounded-xl my-6">
                <h3 className="flex items-center gap-2 text-red-800 mb-4">
                  <AlertCircle className="w-5 h-5" />
                  Common Pain Points:
                </h3>
                <ul className="space-y-2">
                  {section.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-red-700">
                      <span className="block mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.solutions && (
              <div className="bg-green-50 p-6 rounded-xl my-6">
                <h3 className="flex items-center gap-2 text-green-800 mb-4">
                  <Check className="w-5 h-5" />
                  Solutions:
                </h3>
                <ul className="space-y-2">
                  {section.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-2 text-green-700">
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}