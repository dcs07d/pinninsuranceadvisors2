import React from 'react';
import { Play, Clock } from 'lucide-react';
import { Video } from '../../types/video';

interface VideoCardProps {
  video: Video;
  onPlay: (videoId: string) => void;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="relative aspect-video group cursor-pointer" onClick={() => onPlay(video.id)}>
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
        <p className="text-sm text-gray-600 mb-3">{video.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span>{video.duration}</span>
        </div>
      </div>
    </div>
  );
}