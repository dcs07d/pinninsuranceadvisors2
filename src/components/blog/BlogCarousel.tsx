import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import BlogCard from './BlogCard';

interface BlogCarouselProps {
  posts: BlogPost[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Adjust items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < posts.length - itemsPerPage;

  const scroll = (direction: 'left' | 'right') => {
    setCurrentIndex(prev => {
      if (direction === 'left') {
        return Math.max(0, prev - 1);
      }
      return Math.min(posts.length - itemsPerPage, prev + 1);
    });
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {posts.map((post) => (
            <div 
              key={post.id}
              className="w-full min-w-[100%] md:min-w-[50%] px-3"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Always visible on mobile */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors md:opacity-0 md:group-hover:opacity-100 duration-300"
          aria-label="Previous posts"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors md:opacity-0 md:group-hover:opacity-100 duration-300"
          aria-label="Next posts"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
        </button>
      )}

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(posts.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === Math.floor(currentIndex / itemsPerPage)
                ? 'bg-primary w-4'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}