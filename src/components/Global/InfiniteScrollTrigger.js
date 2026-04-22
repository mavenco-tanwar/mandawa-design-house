import React, { useEffect, useRef } from 'react';

const InfiniteScrollTrigger = ({ onTrigger, hasMore, isLoading }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onTrigger();
        }
      },
      { threshold: 0.1 }
    );

    const currentTrigger = triggerRef.current;
    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
  }, [onTrigger, hasMore, isLoading]);

  return (
    <div ref={triggerRef} className="py-10 flex justify-center w-full min-h-[50px]">
      {isLoading && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-[#42393B] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500 font-poppins">Loading more products...</p>
        </div>
      )}
      {!hasMore && !isLoading && (
        <p className="text-sm text-gray-400 font-poppins">No more products to show.</p>
      )}
    </div>
  );
};

export default InfiniteScrollTrigger;
