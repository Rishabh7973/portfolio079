import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React JS Development', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript & ES6+', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'Node.js & Express.js', level: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'Python & NLP', level: 85, color: 'from-indigo-500 to-blue-500' },
    { name: 'MongoDB & SQL', level: 70, color: 'from-purple-500 to-violet-500' },
    { name: 'HTML5 & CSS3', level: 90, color: 'from-pink-500 to-rose-500' },
    { name: 'PHP & MySQL', level: 80, color: 'from-red-500 to-orange-500' },
    { name: 'PowerBI & Data Analysis', level: 75, color: 'from-emerald-500 to-teal-500' }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.'
    },
    {
      icon: Zap,
      title: 'AI & Innovation',
      description: 'Passionate about AI tools, NLP technologies, and staying updated with latest tech trends.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams, participating in hackathons, and contributing to open source.'
    },
    {
      icon: Target,
      title: 'Full Stack Goals',
      description: 'Targeting MERN stack development and building end-to-end scalable applications.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            B.Tech CSE student passionate about full-stack development, AI, and innovative web solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <ImageWithFallback
                src="../images/hero.jpg"
                alt="Rishabh Tiwari - Full Stack Developer"
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Hello! I'm Rishabh Tiwari</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a backend developer focusing on full stack development, currently pursuing B.Tech in 
              Computer Science and Engineering at Allenhouse Institute of Technology, Kanpur (CGPA: 7.9). 
              My journey is driven by a passion for creating scalable web applications using React JS, 
              Node.js, Python, and modern technologies with a huge interest in AI and AI tools.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through internships at Celebal Technologies (React Developer), Edunet Foundation (AI Bot Trainer), 
              and KultureHire (Data Analysis), I've gained hands-on experience in web development, NLP, and data 
              analysis. I love reading new tech updates, developing websites, and working with cutting-edge technologies. 
              My goal is to become a Full Stack Developer specializing in MERN stack development.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold">My Core Values:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 border border-border/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">{highlight.title}</h5>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-background/50 border border-border/50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}