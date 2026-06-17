/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

interface PerformanceContextType {
  isPerformanceMode: boolean;
  togglePerformanceMode: () => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [isPerformanceMode, setIsPerformanceMode] = useState(() => {
    const saved = localStorage.getItem('aurora-performance-mode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('aurora-performance-mode', isPerformanceMode.toString());
    if (isPerformanceMode) {
      document.body.classList.add('performance-mode');
    } else {
      document.body.classList.remove('performance-mode');
    }
  }, [isPerformanceMode]);

  const togglePerformanceMode = () => {
    setIsPerformanceMode(prev => !prev);
  };

  return (
    <PerformanceContext.Provider value={{ isPerformanceMode, togglePerformanceMode }}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformanceMode() {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformanceMode must be used within a PerformanceProvider');
  }
  return context;
}
