import React from 'react';
import { ArrowLeft } from 'lucide-react';
import VideoPlayer from '../common/VideoPlayer';
import { videos } from '../../data/videos';

interface VideoSectionProps {
  videoId: string;
  onBack: () => void;
}

export default function VideoSection({ videoId, onBack }: VideoSectionProps) {
  const video = videos.find(v => v.youtubeId === videoId);

  if (!video) return null;

  return (
    <div>
      <button 
        onClick={onBack}
        className="mb-4 text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Video Library
      </button>

      <VideoPlayer
        videoId={video.youtubeId}
        title={video.title}
        className="rounded-xl overflow-hidden shadow-lg mb-6"
      />

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h2>
        <p className="text-gray-600 mb-4">{video.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{video.category}</span>
          <span>•</span>
          <span>{video.duration}</span>
        </div>
      </div>
    </div>
  );
}