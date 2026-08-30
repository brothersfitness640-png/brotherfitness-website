"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  minHeight?: string | number;
  rootMargin?: string;
  className?: string;
  id?: string;
}

export default function LazySection({
  children,
  minHeight = "200px",
  rootMargin = "250px 0px",
  className = "",
  id,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={!isVisible ? { minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight } : undefined}
    >
      {isVisible ? children : null}
    </div>
  );
}
