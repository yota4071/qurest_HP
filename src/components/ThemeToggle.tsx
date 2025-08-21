'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(actualTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 bg-white dark:bg-slate-900 rounded-full shadow-lg flex items-center justify-center text-xs"
        animate={{
          x: actualTheme === 'dark' ? 24 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        <motion.span
          initial={false}
          animate={{ 
            rotate: actualTheme === 'dark' ? 180 : 0,
            scale: actualTheme === 'dark' ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          {actualTheme === 'dark' ? '🌙' : '☀️'}
        </motion.span>
      </motion.div>
    </motion.button>
  );
}