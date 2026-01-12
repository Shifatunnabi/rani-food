'use client';
import { useEffect, useRef, useState } from 'react';

export default function Animation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            video.src = '/assets/camera.mp4';
            video.load();
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [isLoaded]);

  // Prevent right-click and download
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className="animation-section">
      <div className="animation-container">
        <div className="animation-wrapper">
          <video
            ref={videoRef}
            className="animation-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onContextMenu={handleContextMenu}
            onClick={handleDownload}
            style={{ pointerEvents: 'none' }}
          >
            {/* Source will be loaded dynamically via Intersection Observer */}
          </video>
        </div>
      </div>

      <style jsx>{`
        .animation-section {
          width: 100%;
          padding: 0;
          margin: 0;
          background-color: #000;
          overflow: hidden;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .animation-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }

        .animation-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          overflow: hidden;
        }

        .animation-wrapper :global(.animation-video) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
          user-select: none;
        }

        /* Prevent selection and dragging */
        .animation-wrapper :global(.animation-video)::-webkit-media-controls {
          display: none !important;
        }

        .animation-wrapper :global(.animation-video)::-webkit-media-controls-enclosure {
          display: none !important;
        }

        /* Desktop - Large screens */
        @media (min-width: 1200px) {
          .animation-wrapper {
            padding-bottom: 50%; /* Adjust ratio for desktop if needed */
          }
        }

        /* Tablet - Medium screens */
        @media (max-width: 991px) and (min-width: 768px) {
          .animation-wrapper {
            padding-bottom: 56.25%;
          }
        }

        /* Mobile - Small screens */
        @media (max-width: 767px) {
          .animation-wrapper {
            padding-bottom: 60%; /* Slightly taller on mobile */
          }
        }

        /* Extra small mobile */
        @media (max-width: 480px) {
          .animation-wrapper {
            padding-bottom: 65%;
          }
        }
      `}</style>
    </section>
  );
}
