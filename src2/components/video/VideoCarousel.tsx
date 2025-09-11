import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Video } from '../../types/video';

interface VideoCarouselProps {
  videos: Video[];
  onSelect: (videoId: string) => void;
}

export default function VideoCarousel({ videos, onSelect }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < videos.length - itemsPerView;

  const scroll = (direction: 'left' | 'right') => {
    setCurrentIndex(prev => {
      if (direction === 'left') {
        return Math.max(0, prev - 1);
      }
      return Math.min(videos.length - itemsPerView, prev + 1);
    });
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {videos.map((video) => (
            <div 
              key={video.id}
              className="w-full min-w-[33.333%] px-2"
            >
              <button 
                onClick={() => onSelect(video.youtubeId)}
                className="w-full text-left bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video group">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                  <div className="mt-2 text-sm text-gray-500">{video.duration}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Previous videos"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Next videos"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      )}
    </div>
  );
}