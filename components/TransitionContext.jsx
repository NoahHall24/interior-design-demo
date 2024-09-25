import React, { createContext, useState, useContext, useCallback } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
    setShowContent(false);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
    // Delay showing content slightly after transition ends
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, showContent, startTransition, endTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);