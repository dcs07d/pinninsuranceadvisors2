import React, { useState } from 'react';
import ResourceLayout from '../../components/layout/ResourceLayout';
import VideoCarousel from '../../components/video/VideoCarousel';
import VideoSection from '../../components/video/VideoSection';
import { videos } from '../../data/videos';
import { Youtube, ArrowRight } from 'lucide-react';

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <ResourceLayout 
      title="Video Library"
      description="Watch educational videos about Medicare coverage, enrollment, and benefits."
    >
      <div className="max-w-6xl mx-auto">
        {selectedVideo ? (
          <VideoSection 
            videoId={selectedVideo} 
            onBack={() => setSelectedVideo(null)} 
          />
        ) : (
          <>
            <VideoCarousel videos={videos} onSelect={setSelectedVideo} />
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Want to see more Medicare educational content?
              </p>
              <a 
                href="https://www.youtube.com/@PinnacleInsurance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors group"
              >
                <Youtube className="w-5 h-5" />
                Subscribe to our YouTube channel
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </>
        )}
      </div>
    </ResourceLayout>
  );
}