import * as React from 'react';

interface BoxProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  headerRight?: React.ReactNode; 
}

export const BoxWithTitle: React.FC<BoxProps> = ({ children, title, className = '', headerRight }) => {
  return (
    <div 
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-theme-sm dark:border-gray-800 dark:bg-card ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white/90">
          {title}
        </h3>
        {headerRight && <div>{headerRight}</div>}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};