"use client"
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', setTheme: (theme: 'light' | 'dark') => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme: (theme) => setTheme(theme) }}>
      <div className={theme}>{children}</div> {/* Aplica a classe do tema */}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
