'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce,
    amount: threshold,
    margin: "0px 0px -100px 0px"
  });

  return { ref, isInView };
}

export function useStaggeredAnimation(items: any[], delay = 0.1) {
  return items.map((_, index) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.6, 
      delay: index * delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }));
}