import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer | Python Developer | B.Tech CSE Student';
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Particle animation component
  const Particles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ));
    
    return <div className="absolute inset-0 overflow-hidden">{particles}</div>;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <Particles />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm Rishabh Tiwari
          </motion.h1>
          
          <motion.div 
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="font-mono">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I am a backend developer focusing on full stack development. Building scalable web applications with expertise in 
            React JS, Node.js, Python, NLP, and modern technologies. Passionate about AI tools and developing innovative 
            solutions. Let's create something amazing together!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group relative overflow-hidden"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Contact Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('images/Rishabh_Tiwari_CV.pdf', '_blank')}
              className="group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Github, href: 'https://github.com/Rishabh7973/', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabh-tiwari7973', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rishabhtiwari7973@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}