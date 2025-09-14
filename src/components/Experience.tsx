import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin, Award, Briefcase, Eye } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech - Computer Science and Engineering',
      company: 'Allenhouse Institute of Technology',
      location: 'Rooma, Kanpur',
      duration: '2022 - 2026',
      description: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering with a focus on software development, algorithms, and modern web technologies.',
      achievements: [
        'Current CGPA: 7.9/10',
        'Relevant Coursework: Python, Database Management System',
        'Active participation in hackathons and competitions',
        'Winner of multiple technical competitions',
        'Consistent academic performance'
      ],
      technologies: ['Python', 'Data Structures', 'Algorithms', 'DBMS', 'Software Engineering'],
      logo: '🎓'
    },
    {
      id: 2,
      type: 'internship',
      title: 'React Developer',
      company: 'Celebal Technologies',
      location: 'Remote',
      duration: 'May 2025 - July 2025',
      description: 'Developed React websites and handled complete project management. Gained hands-on experience in modern web development technologies and received excellent feedback from HR.',
      achievements: [
        'Developed responsive React websites',
        'Handled complete project lifecycle',
        'Appreciated by HR for excellent performance',
        'Received positive feedback and recommendation',
        'Worked with React, Bootstrap, and JavaScript'
      ],
      technologies: ['React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
      logo: '⚛️',
      certificateImageUrl: 'https://drive.google.com/file/d/12uLOrmc0tGP3-yEEx4pk7eJpnFIvSq7x/view?usp=sharing'
    },
    {
      id: 3,
      type: 'internship',
      title: 'AI Bot Trainer',
      company: 'Edunet Foundation',
      location: 'Remote',
      duration: 'November 2024 - December 2024',
      description: 'Specialized in chatbot training and testing using NLP technologies. Worked extensively with Python, NLTK, and Streamlit to develop intelligent conversational AI systems.',
      achievements: [
        'Successfully trained and tested AI chatbots',
        'Implemented NLP algorithms for conversation',
        'Developed interactive interfaces using Streamlit',
        'Completed comprehensive AI training program',
        'Earned professional certification'
      ],
      technologies: ['NLP', 'Python', 'NLTK', 'Streamlit', 'Jupyter Notebook'],
      logo: '🤖',
      certificateImageUrl: 'https://drive.google.com/file/d/1GHNfeJkiuSriplGtAyJc6dlnz440b_Yc/view?usp=sharing'
    },
    {
      id: 4,
      type: 'internship',
      title: 'Data Analysis Intern',
      company: 'KultureHire',
      location: 'Remote',
      duration: 'October 2024 - February 2025',
      description: 'Focused on data cleaning, visualization, and result analysis. Worked with PowerBI, Excel, Pivot Tables, and Jupyter Notebook to extract meaningful insights from complex datasets.',
      achievements: [
        'Performed comprehensive data cleaning operations',
        'Created interactive data visualizations',
        'Generated actionable insights from complex datasets',
        'Mastered PowerBI dashboard development',
        'Completed advanced Excel and Pivot Table analysis'
      ],
      technologies: ['PowerBI', 'Excel', 'Pivot Tables', 'Jupyter Notebook', 'Data Analysis'],
      logo: '📊',
      certificateImageUrl: 'https://drive.google.com/file/d/1Jz1aMo-_cWBv1GMfCQicsxYQMv3fQ9vW/view?usp=sharing'
    }
  ];

  const TimelineItem = ({ experience, index, isLast }: { 
    experience: any; 
    index: number; 
    isLast: boolean; 
  }) => (
    <motion.div
      className="relative flex items-start space-x-4 pb-8"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
      )}
      
      {/* Timeline Dot */}
      <motion.div
        className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-lg ${
          experience.type === 'education' 
            ? 'bg-gradient-to-r from-purple-500 to-indigo-500' 
            : 'bg-gradient-to-r from-blue-500 to-cyan-500'
        } shadow-lg`}
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
      >
        <span className="text-white">{experience.logo}</span>
      </motion.div>
      
      {/* Content Card */}
      <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
              <p className="text-lg text-primary font-medium">{experience.company}</p>
            </div>
            <Badge 
              variant={experience.type === 'education' ? 'default' : 'secondary'}
              className="mt-2 sm:mt-0"
            >
              {experience.type === 'education' ? 
                <><Award className="h-3 w-3 mr-1" /> Education</> : 
                <><Briefcase className="h-3 w-3 mr-1" /> Internship</>
              }
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground text-sm mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {experience.duration}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {experience.location}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement: string, idx: number) => (
                <motion.li
                  key={idx}
                  className="flex items-start space-x-2 text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + idx * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string, idx: number) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.7 + idx * 0.05 }}
                >
                  <Badge variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
          
          {experience.certificateImageUrl && (
            <div className="mt-6 pt-4 border-t border-border">
              <Button 
                onClick={() => window.open(experience.certificateImageUrl, '_blank')}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Experience Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through education and internships in software development
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: 'Years of Study', value: '3+', icon: '📅' },
            { label: 'Projects Completed', value: '5+', icon: '🚀' },
            { label: 'Internships', value: '3', icon: '🏢' },
            { label: 'Certifications', value: '10+', icon: '🏆' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <TimelineItem
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-lg hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}