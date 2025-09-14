import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ChevronUp, Heart, Github, Linkedin, Twitter, Mail, Code, Coffee } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' }
    ],
    'More': [
      { name: 'Experience', href: '#experience' },
      { name: 'Certificates', href: '#certificates' },
      { name: 'Contact', href: '#contact' },
      { name: 'Resume', href: '#home' }
    ],
    'Resources': [
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Open Source', href: '#' },
      { name: 'Mentorship', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rishabhtiwarifsd', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rishabhtiwarifsd', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com/rishabhtiwarifsd', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Mail, href: 'mailto:rishabhtiwari7973@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          ref={ref}
          className="py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Rishabh Tiwari
                </h3>
                <p className="text-muted-foreground mt-2">
                  Aspiring Full Stack Developer
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                B.Tech CSE student passionate about building scalable web applications 
                with modern technologies. Let's create innovative solutions together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${social.color}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="py-8 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <h4 className="font-semibold mb-2">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified about new projects, blog posts, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-6 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Rishabh Tiwari. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>and</span>
              <Coffee className="h-4 w-4 text-yellow-600" />
              <span>in Kanpur</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Code className="h-4 w-4" />
                <span>Built with React & Tailwind</span>
              </span>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="sm"
          onClick={scrollToTop}
          className="rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow group"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUp className="h-4 w-4" />
          </motion.div>
          <span className="sr-only">Scroll to top</span>
        </Button>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
}