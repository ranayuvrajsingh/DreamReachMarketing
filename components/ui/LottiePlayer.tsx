'use client';

import { useEffect, useRef } from 'react';
import lottie from "lottie-web";


export default function LottiePlayer({ animationData }: { animationData: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy(); // Clean up
  }, [animationData]);

  return <div className="w-full h-[150px]" ref={containerRef} />;
}
