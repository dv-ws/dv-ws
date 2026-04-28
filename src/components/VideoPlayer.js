/*  VideoPlayer.js — Smart lazy-loading video component for Supabase
    - Loads NOTHING until video is 300px from viewport
    - Pauses automatically when scrolled out of view
    - Shows black background while loading (clean, no flash)
    - preload="none" until near viewport, then switches to "auto"
    - Only 2 videos load simultaneously max
    Place in: src/components/VideoPlayer.js
*/
import { useEffect, useRef, useState } from "react";

/* Max 2 videos loading at once */
const loadingSet = new Set();
const MAX_LOADING = 2;

export default function VideoPlayer({ src, className, style, videoStyle, children }) {
  const containerRef = useRef(null);
  const videoRef     = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible,  setIsVisible]  = useState(false);

  /* IntersectionObserver — trigger load 300px before entering view */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          /* Only load if under the concurrent limit */
          if (loadingSet.size < MAX_LOADING || loadingSet.has(src)) {
            loadingSet.add(src);
            setShouldLoad(true);
          } else {
            /* Wait a bit and try again */
            const t = setTimeout(() => {
              loadingSet.add(src);
              setShouldLoad(true);
            }, 800);
            return () => clearTimeout(t);
          }
        } else {
          setIsVisible(false);
          /* Pause when off screen to save bandwidth */
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "300px 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      loadingSet.delete(src);
    };
  }, [src]);

  /* Resume play when back in view */
  useEffect(() => {
    if (!isVisible || !videoRef.current || !shouldLoad) return;
    const v = videoRef.current;
    if (v.paused && v.readyState >= 2) {
      v.play().catch(() => {});
    }
  }, [isVisible, shouldLoad]);

  /* Once loaded, remove from loading set so next video can start */
  const handleCanPlay = () => {
    loadingSet.delete(src);
  };

  return (
    <div ref={containerRef} style={{ position: "absolute", inset: 0, ...style }}>
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload={shouldLoad ? "auto" : "none"}
        onCanPlayThrough={handleCanPlay}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...videoStyle }}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
      {children}
    </div>
  );
}