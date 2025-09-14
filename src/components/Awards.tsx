import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Medal, Star, Award, Calendar, MapPin, Users, Gift, Eye } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      id: 1,
      title: 'Website Development Competition',
      position: '1st Place Winner',
      date: 'October 7, 2023',
      organizer: 'Allenhouse Institute of Technology',
      location: 'Kanpur, Uttar Pradesh',
      description: 'Won first place in college-level website development competition with theme given on the spot, demonstrating exceptional quick problem-solving and technical skills under pressure.',
      prize: '₹2000 Prize Money',
      team: 'Individual Competition',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Quick Development', 'Problem Solving'],
      icon: '🏆',
      type: 'Competition',
      difficulty: 'High',
      participants: '50+ participants',
      image: '../../images/web_competition.jpeg',
      certificateImageUrl: 'https://drive.google.com/file/d/1yArtagWJPGswJQ_njrE3pHY9CcM2Gr82/view?usp=sharing'
    },
    {
      id: 2,
      title: 'ANVESHAN 2025 Science Quiz',
      position: '1st Place Winner',
      date: 'February 28, 2025',
      organizer: 'Allenhouse Institute of Technology',
      location: 'Kanpur, Uttar Pradesh',
      description: 'Achieved first place in ANVESHAN 2025 science quiz test, demonstrating comprehensive technical knowledge and scientific understanding across multiple domains.',
      prize: 'Gold Medal & Certificate of Excellence',
      team: 'Individual Competition',
      technologies: ['Scientific Knowledge', 'Technical Aptitude', 'Research Skills', 'Academic Excellence'],
      icon: '🧠',
      type: 'Academic',
      difficulty: 'High',
      participants: '100+ participants',
      image: '../../images/avnish_science_quiz1.png',
      certificateImageUrl: 'https://drive.google.com/file/d/1iBLGUHyx3grpZxweSGufDytdumG5ibmQ/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Aptitude Challenge Of Code2Career',
      position: '159th Rank Globally',
      date: 'April 27, 2025',
      organizer: 'Lets Code',
      location: 'Global Competition',
      description: 'Secured impressive 159th rank globally in comprehensive aptitude challenge covering numerical ability, reasoning, and verbal skills among thousands of participants worldwide.',
      prize: 'Global Recognition Certificate',
      team: 'Individual Competition',
      technologies: ['Numerical Ability', 'Logical Reasoning', 'Verbal Skills', 'Competitive Programming', 'Global Competition'],
      icon: '🌍',
      type: 'Global',
      difficulty: 'Very High',
      participants: '10,000+ participants globally',
      image: '../../images/appti.png',
      certificateImageUrl: 'https://drive.google.com/file/d/1Y0AP__S9rtTp0NGBX7hCXH-1uti2UtAF/view?usp=sharing'
    }
  ];

  const achievementStats = [
    { label: 'Competitions Won', value: '3', icon: Trophy, color: 'from-yellow-400 to-orange-500' },
    { label: 'Prize Money Earned', value: '₹2000+', icon: Gift, color: 'from-green-400 to-emerald-500' },
    { label: 'Global Recognition', value: '159th', icon: Star, color: 'from-blue-400 to-cyan-500' },
    { label: 'Participants Defeated', value: '1000+', icon: Users, color: 'from-purple-400 to-violet-500' }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Achievements and recognition earned through competitive excellence and technical prowess
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {achievementStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
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

        {/* Awards Grid */}
        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                    {/* Image Section */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <ImageWithFallback
                        src={award.image}
                        alt={award.title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Award Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`text-white ${
                          award.type === 'Competition' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                          award.type === 'Academic' ? 'bg-gradient-to-r from-blue-400 to-purple-500' :
                          'bg-gradient-to-r from-green-400 to-emerald-500'
                        }`}>
                          {award.type}
                        </Badge>
                      </div>

                      {/* Award Icon */}
                      <div className="absolute bottom-4 right-4 text-4xl filter drop-shadow-lg">
                        {award.icon}
                      </div>

                      {/* Position Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold">
                          {award.position}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {award.title}
                          </h3>
                          <p className="text-lg text-primary font-medium">{award.organizer}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {award.date}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {award.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          {award.participants}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Award className="h-4 w-4 mr-2" />
                          {award.difficulty} Difficulty
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {award.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-secondary/50 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Gift className="h-4 w-4 mr-2 text-green-500" />
                            Prize Awarded
                          </h4>
                          <p className="text-green-600 font-medium">{award.prize}</p>
                        </div>
                        <div className="p-4 bg-secondary/50 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-blue-500" />
                            Competition Type
                          </h4>
                          <p className="text-blue-600 font-medium">{award.team}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Skills Demonstrated:</h4>
                        <div className="flex flex-wrap gap-2">
                          {award.technologies.map((tech) => (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button 
                          onClick={() => window.open(award.certificateImageUrl, '_blank')}
                          className="w-full"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-muted-foreground mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span>Consistently delivering excellence in competitive environments</span>
          </motion.div>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="h-4 w-4 mr-2" />
            Let's Achieve Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}