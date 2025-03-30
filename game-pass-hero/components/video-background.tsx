"use client"

import { useEffect, useRef } from "react"

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8 // Slow down the video slightly
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3),transparent_70%)] z-20"></div>
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source
          src="https://video-previews.elements.envatousercontent.com/files/97d7005f-68d8-4eff-b959-8f219d2d538e/video_preview_h264.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

