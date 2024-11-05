'use client';
import { sectionSlice, useDispatch } from '@/lib/redux';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ref.current) return;

    // Dispatch the appropriate action based on visibility
    if (isInView) {
      dispatch(sectionSlice.actions.setVisible({ key: ref.current.id }));
    } else {
      dispatch(sectionSlice.actions.setHidden({ key: ref.current.id }));
    }
  }, [isInView, dispatch]); // No need to include ref as a dependency

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}
