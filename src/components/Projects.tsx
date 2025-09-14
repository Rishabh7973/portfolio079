import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play, X, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Allensupport - Grievance Redressal System',
      description: 'AllenSupport is a grievance redressal and feedback system for students of Allenhouse Institute of Technology. It provides a transparent platform to raise complaints, track their status, and ensure timely resolution.',
      longDescription: 'AllenSupport is a comprehensive grievance redressal and feedback system designed specifically for students of Allenhouse Institute of Technology. The platform provides a transparent and efficient way for students to raise complaints, track their status, and ensure timely resolution. Admins and sub-admins manage issues through predefined committees, ensuring accountability and fairness throughout the process.',
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc3MTE2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
      category: 'Full-Stack',
      github: 'https://github.com/Rishabh7973/AllenSuport',
      demo: 'https://allenhouse.ac.in/Allensuport/',
      features: [
        'Direct Complaint Filing System',
        'Real-time Complaint History Tracking',
        'Faculty Feedback System',
        'Functional Dashboard for Analysis',
        'Admin Panel for Committee Management',
        'User Authentication & Authorization',
        'Responsive Bootstrap Interface',
        'Database Management with MySQL'
      ]
    },
    {
      id: 2,
      title: 'NLP-based Chatbot',
      description: 'This project implements a chatbot using Natural Language Processing (NLP) techniques with intent recognition and contextual response generation.',
      longDescription: 'This advanced NLP-based chatbot is designed to understand user intents such as greetings, farewells, gratitude, and more based on predefined patterns and responds appropriately. The chatbot supports a conversational interface, maintains conversation history to improve user experience, and allows modifications of intents via JSON configuration to extend or adapt behavior.',
      image: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1Nzc4MzIwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'Streamlit', 'JSON', 'NLP'],
      category: 'AI/ML',
      github: 'https://github.com/Rishabh7973/implementation-of-chatbot-using-NLP',
      demo: 'https://implimentation-of-chatbot-using-nlp-mettphgktyduqsnvesc3su.streamlit.app/',
      features: [
        'Intent Recognition System',
        'Natural Language Processing with NLTK',
        'Machine Learning with Scikit-learn',
        'Interactive Streamlit Web Interface',
        'Conversation History Logging',
        'JSON-based Intent Configuration',
        'Pattern Matching & ML Integration',
        'CSV-based Conversation Storage'
      ]
    },
    {
      id: 3,
      title: 'FileShare7973 - File Sharing Platform',
      description: 'A lightweight file sharing web application that allows users to upload and share files with others via generated shareable links.',
      longDescription: 'FileShare7973 is a secure and lightweight file sharing web application that simplifies file transfer without relying on third-party cloud storage. Users can easily upload files and share them with others through automatically generated shareable links. The platform demonstrates advanced backend handling of file uploads and downloads while maintaining security and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1585909694668-0a6e0ddbfe8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxlJTIwc2hhcmluZyUyMGFwcGxpY2F0aW9ufGVufDF8fHx8MTc1Nzc4MzMxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Multer', 'Bootstrap'],
      category: 'Full-Stack',
      github: 'https://github.com/Rishabh7973/Fileshare7973',
      demo: '#',
      features: [
        'Upload Files with Unique Auto-generated Links',
        'Secure File Handling with Size/Type Restrictions',
        'Simple UI for Easy File Management',
        'Download Links Generation',
        'Backend Scalability for Large Files',
        'MongoDB Integration for File Metadata',
        'Express.js Backend Architecture',
        'Multer for File Upload Processing'
      ]
    },
    {
      id: 4,
      title: 'SocialFeed - Mini Social Network',
      description: 'A mini social networking platform that allows users to create posts, like, and interact in a community feed with core social media functionality.',
      longDescription: 'SocialFeed is a comprehensive mini social networking platform that replicates core social media functionality with a focus on learning CRUD operations, authentication, and real-time updates. The platform enables users to create posts, engage through likes, and interact within a community feed environment, providing hands-on experience with full-stack development concepts.',
      image: 'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc3ODMzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap', 'Tailwind CSS'],
      category: 'Full-Stack',
      github: 'https://github.com/Rishabh7973/socialfeed',
      demo: '#',
      features: [
        'User Authentication with JWT',
        'Create, View, and Delete Posts',
        'Like System for Post Engagement',
        'Shared Community Feed',
        'CRUD Operations Implementation',
        'Real-time State Management',
        'Secure Authentication System',
        'Responsive User Interface'
      ]
    },
    {
      id: 5,
      title: 'SafeMitra - Women Safety App',
      description: 'SafeMitra is a women\'s safety application designed to provide quick access to emergency contacts and location sharing for immediate help.',
      longDescription: 'SafeMitra is a comprehensive women\'s safety application designed to provide instant access to emergency contacts and real-time location sharing. The app ensures immediate help by allowing users to send alerts with their live location to pre-configured guardians. Built with security and reliability in mind, SafeMitra offers peace of mind through advanced safety features and intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1722488359737-7a9b8a8436c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzYWZldHl8ZW58MXx8fHwxNTc3NzgzMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Android', 'Java', 'Kotlin', 'Firebase', 'Google Maps API', 'XML'],
      category: 'Mobile',
      github: 'https://github.com/Kushika-Agarwal/SafeMitra',
      demo: '#',
      features: [
        'Emergency SOS Button for Instant Alerts',
        'Live Location Tracking and Sharing',
        'Trusted Contact Management',
        'Firebase Authentication & Real-time Database',
        'Google Maps Integration',
        'Background Services for SOS',
        'Push Notifications with Firebase',
        'Intuitive User Interface Design'
      ]
    }
  ];

  const categories = ['All', 'Full-Stack', 'AI/ML', 'Mobile'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative mb-6">
            <ImageWithFallback
              src={project?.image}
              alt={project?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{project?.title}</h3>
              <p className="text-muted-foreground">{project?.longDescription}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project?.technologies.map((tech: string) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {project?.features.map((feature: string) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              {project?.demo !== '#' && (
                <Button asChild>
                  <a href={project?.demo} target="_blank" rel="noopener noreferrer">
                    <Play className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              <Button variant="outline" asChild>
                <a href={project?.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, AI/ML, and mobile applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3" variant="secondary">
                  {project.category}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-3">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  {project.demo !== '#' && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Rishabh7973/" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View More Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}