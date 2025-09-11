import React, { useState } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  className?: string;
  controls?: boolean;
}

export default function VideoPlayer({ 
  videoId, 
  title, 
  className = "",
  controls = true 
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { trackVideoPlay } = useAnalytics();

  const handleLoad = () => {
    setIsLoading(false);
    trackVideoPlay(videoId);
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Video could not be loaded');
  };

  if (error) {
    return (
      <div className={`bg-gray-100 rounded-xl p-6 text-center ${className}`}>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&controls=${controls ? 1 : 0}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}