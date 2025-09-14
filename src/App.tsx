import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';

// Import all components
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize dark mode from localStorage and set SEO meta tags
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
    // Set SEO meta tags
    document.title = 'Rishabh Tiwari - Full Stack Developer Portfolio';
    
    const metaTags = [
      { name: 'description', content: 'Rishabh Tiwari is an aspiring full-stack developer specializing in React JS, Node.js, Express.js, and MongoDB. B.Tech CSE student passionate about building scalable web applications.' },
      { name: 'keywords', content: 'full stack developer, react developer, node.js, javascript, mongodb, web development, portfolio, B.Tech CSE' },
      { name: 'author', content: 'Rishabh Tiwari' },
      { property: 'og:title', content: 'Rishabh Tiwari - Full Stack Developer' },
      { property: 'og:description', content: 'Aspiring Full Stack Developer passionate about creating innovative web applications with modern technologies.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Rishabh Tiwari - Full Stack Developer' },
      { name: 'twitter:description', content: 'Aspiring Full Stack Developer passionate about creating innovative web applications with modern technologies.' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      let meta = document.querySelector(`meta[${name ? 'name' : 'property'}="${name || property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://rishabhtiwarifsd.dev');
    
    // Simulate loading time for smooth entrance
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h1
            className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Loading Portfolio...
          </motion.h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Navigation */}
      <Navigation toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Certificates Section */}
        <Certificates />

        {/* Awards Section */}
        <Awards />

        {/* Contact Section */}
        <Contact />
      </motion.main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: isDarkMode ? '#1f2937' : '#ffffff',
            color: isDarkMode ? '#f9fafb' : '#111827',
            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
          },
        }}
      />

      {/* Smooth scroll behavior */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: ${isDarkMode ? '#1f2937' : '#f1f5f9'};
          }
          
          ::-webkit-scrollbar-thumb {
            background: ${isDarkMode ? '#4b5563' : '#cbd5e1'};
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: ${isDarkMode ? '#6b7280' : '#94a3b8'};
          }

          /* Hide scrollbar for Firefox */
          html {
            scrollbar-width: thin;
            scrollbar-color: ${isDarkMode ? '#4b5563 #1f2937' : '#cbd5e1 #f1f5f9'};
          }

          /* Disable text selection on interactive elements */
          button, nav a {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          /* Smooth focus transitions */
          * {
            transition: outline 0.2s ease-in-out;
          }

          /* Better focus visibility */
          *:focus-visible {
            outline: 2px solid ${isDarkMode ? '#60a5fa' : '#3b82f6'};
            outline-offset: 2px;
          }

          /* Improve performance for animations */
          * {
            will-change: auto;
          }

          .motion-element {
            will-change: transform, opacity;
          }
        `}
      </style>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/5 to-blue-600/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}