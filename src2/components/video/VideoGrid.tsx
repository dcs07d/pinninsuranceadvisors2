import React from 'react';
import { Play } from 'lucide-react';
import { Video } from '../../types/video';

interface VideoGridProps {
  videos: Video[];
  onSelect: (videoId: string) => void;
}

export default function VideoGrid({ videos, onSelect }: VideoGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <button 
          key={video.id}
          onClick={() => onSelect(video.youtubeId)}
          className="text-left bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
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
      ))}
    </div>
  );
}