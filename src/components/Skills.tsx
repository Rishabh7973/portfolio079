import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Server,
  Globe,
  Zap,
  Shield,
  Settings,
  Cpu,
  Brain,
  BarChart3,
  Monitor,
  Smartphone
} from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      color: 'from-purple-400 to-indigo-500',
      skills: [
        { name: 'Python', level: 85, description: 'Data science, NLP, automation, and backend development' },
        { name: 'JavaScript', level: 80, description: 'Modern ES6+ features, DOM manipulation, and frameworks' },
        { name: 'PHP', level: 80, description: 'Server-side development and database integration' },
        { name: 'HTML5', level: 90, description: 'Semantic markup, accessibility, and web standards' },
        { name: 'CSS3', level: 90, description: 'Advanced styling, animations, and responsive design' }
      ]
    },
    {
      category: 'Frontend Technologies',
      icon: Monitor,
      color: 'from-blue-400 to-cyan-500',
      skills: [
        { name: 'React JS', level: 85, description: 'Component-based UI, hooks, state management, and routing' },
        { name: 'Bootstrap', level: 85, description: 'Responsive CSS framework and grid systems' },
        { name: 'Tailwind CSS', level: 75, description: 'Utility-first CSS framework for rapid development' },
        { name: 'Responsive Design', level: 85, description: 'Mobile-first approach and cross-device compatibility' }
      ]
    },
    {
      category: 'Backend Technologies',
      icon: Server,
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript runtime and API development' },
        { name: 'Express.js', level: 75, description: 'Web application framework for Node.js' },
        { name: 'PHP', level: 80, description: 'Server-side scripting and web development' },
        { name: 'REST APIs', level: 75, description: 'RESTful service design and implementation' }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'MongoDB', level: 70, description: 'NoSQL database design and operations' },
        { name: 'MySQL', level: 80, description: 'Relational database management and SQL queries' },
        { name: 'Database Design', level: 75, description: 'Schema design, normalization, and optimization' },
        { name: 'DBMS Concepts', level: 80, description: 'Database management system principles and practices' }
      ]
    },
    {
      category: 'AI & Data Science',
      icon: Brain,
      color: 'from-pink-400 to-purple-500',
      skills: [
        { name: 'Natural Language Processing', level: 85, description: 'NLTK, text processing, and chatbot development' },
        { name: 'Machine Learning', level: 75, description: 'Scikit-learn, pattern recognition, and model training' },
        { name: 'Streamlit', level: 80, description: 'Interactive web applications for data science' },
        { name: 'Jupyter Notebook', level: 80, description: 'Data analysis and research documentation' }
      ]
    },
    {
      category: 'Data Analysis & Visualization',
      icon: BarChart3,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'PowerBI', level: 75, description: 'Business intelligence and dashboard creation' },
        { name: 'Excel Advanced', level: 85, description: 'Pivot tables, charts, and data analysis' },
        { name: 'Data Visualization', level: 80, description: 'Charts, graphs, and presentation techniques' },
        { name: 'Data Cleaning', level: 80, description: 'Data preprocessing and quality improvement' }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: Settings,
      color: 'from-gray-400 to-slate-500',
      skills: [
        { name: 'Git & GitHub', level: 80, description: 'Version control and collaborative development' },
        { name: 'VS Code', level: 90, description: 'Code editor proficiency and extensions' },
        { name: 'ChatGPT & AI Tools', level: 85, description: 'AI-assisted development and automation' },
        { name: 'Figma', level: 70, description: 'UI/UX design and prototyping' },
        { name: 'WordPress', level: 75, description: 'Website development and customization' }
      ]
    },
    {
      category: 'Additional Skills',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'Problem Solving', level: 85, description: 'Algorithmic thinking and debugging' },
        { name: 'Project Management', level: 75, description: 'Planning, execution, and team coordination' },
        { name: 'Technical Writing', level: 80, description: 'Documentation and communication' },
        { name: 'Competitive Programming', level: 70, description: 'Coding competitions and optimization' }
      ]
    }
  ];

  const totalSkills = skillCategories.reduce((total, category) => total + category.skills.length, 0);
  const averageLevel = Math.round(
    skillCategories.reduce((total, category) => 
      total + category.skills.reduce((catTotal, skill) => catTotal + skill.level, 0), 0
    ) / totalSkills
  );

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development, AI/ML, and data analysis
          </p>
        </motion.div>

        {/* Skills Overview Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: 'Total Skills', value: totalSkills.toString(), icon: Code2, color: 'from-blue-400 to-cyan-500' },
            { label: 'Skill Categories', value: skillCategories.length.toString(), icon: Settings, color: 'from-green-400 to-emerald-500' },
            { label: 'Average Proficiency', value: `${averageLevel}%`, icon: BarChart3, color: 'from-purple-400 to-indigo-500' },
            { label: 'Years Experience', value: '3+', icon: Zap, color: 'from-yellow-400 to-orange-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute right-0 top-0 w-full h-full bg-white/20 rounded-full"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{ display: hoveredSkill === skill.name ? 'block' : 'none' }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Skill Description on Hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        height: hoveredSkill === skill.name ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground mt-2 p-3 bg-secondary/50 rounded-lg">
                        {skill.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-muted-foreground mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="h-5 w-5 text-primary" />
            <span>Continuously learning and expanding technical expertise</span>
          </motion.div>
          <motion.a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="h-4 w-4 mr-2" />
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}