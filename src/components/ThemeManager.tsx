"use client"; 

import { useState, useEffect } from 'react';
import Header from './Header';


const ThemeManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {children}
    </>
  );
};

export default ThemeManager;