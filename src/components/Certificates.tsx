import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink, Download, Trophy, Star, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      id: 1,
      title: 'Python Development & Data Science: Variables and Data Types',
      issuer: 'Udemy',
      date: 'September 25, 2024',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1679110451343-f3e151ba42f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNlcnRpZmljYXRlfGVufDF8fHx8MTc1Nzc4Mzk0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive course covering Python development fundamentals and data science concepts including variables and data types.',
      skills: ['Python Development', 'Data Science', 'Variables', 'Data Types'],
      credentialId: 'UC-04294c5c-c281-45e4-a944-6147d2f155bd',
      credentialUrl: 'https://ude.my/UC-04294c5c-c281-45e4-a944-6147d2f155bd',
      certificateImageUrl: 'https://drive.google.com/file/d/1vpz6AEINB2fhYRpeavuorLzuppFHa3oL/view?usp=sharing',
      duration: '1.5 total hours',
      level: 'Beginner',
      icon: '🐍'
    },
    {
      id: 2,
      title: 'Excel Charts- Data Visualization Secrets - Beginner to Pro',
      issuer: 'Udemy',
      date: 'October 28, 2024',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNlbCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1Nzc4Mzk1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced Excel training focused on creating compelling data visualizations and charts for professional presentations.',
      skills: ['Data Visualization', 'Excel Charts', 'Analytics', 'Business Intelligence'],
      credentialId: 'UC-3a3fbc445-f144-456a-a023-25977a09b7b0',
      credentialUrl: 'https://ude.my/UC-3a3fbc445-f144-456a-a023-25977a09b7b0',
      certificateImageUrl: 'https://drive.google.com/file/d/16XIf8C5A3fDHZi5zsYLTXPY-m6TzNTxK/view?usp=sharing',
      duration: '1.5 total hours',
      level: 'Intermediate',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Complete Wordpress Website Developer Course',
      issuer: 'Udemy',
      date: 'February 16, 2025',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTc3NjMxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive WordPress development course covering theme customization, plugin development, and website management.',
      skills: ['WordPress', 'Website Development', 'PHP', 'Theme Development'],
      credentialId: 'UC-561bf69e9-da3f-4df6-a6ea-c7f0eda0500c',
      credentialUrl: 'https://ude.my/UC-561bf69e9-da3f-4df6-a6ea-c7f0eda0500c',
      certificateImageUrl: 'https://drive.google.com/file/d/125VPJbf6mptYQp0YVNFThFA3TAtkBheQ/view?usp=sharing',
      duration: '5 total hours',
      level: 'Intermediate',
      icon: '🌐'
    },
    {
      id: 4,
      title: 'Web Development Course (Diploma)',
      issuer: 'STP Computer Education',
      date: 'September 2024',
      type: 'Diploma',
      image: 'https://images.unsplash.com/photo-1581552667629-95439fadbbef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRpcGxvbWF8ZW58MXx8fHwxNzU3NzgzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '12-month comprehensive web development diploma program covering full-stack technologies and practical project development.',
      skills: ['Web Development', 'HTML5', 'CSS3', 'JavaScript', 'PHP'],
      credentialId: '331584',
      credentialUrl: 'https://stpcomputereducation.com',
      certificateImageUrl: 'https://drive.google.com/file/d/11eqfcY9y4SzN4Y3d7iCzJAD2MK5lROmT/view?usp=sharing',
      duration: '12 months',
      level: 'Advanced',
      icon: '🎓'
    },
    {
      id: 5,
      title: 'Web Development Professional Certification',
      issuer: 'Institute of Management, Technology & Finance (MTF)',
      date: 'September 25, 2024',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzU3NzAzNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Professional certification validating expertise in modern web development technologies and best practices.',
      skills: ['Web Development', 'Professional Standards', 'Industry Best Practices'],
      credentialId: '955580331RT',
      credentialUrl: 'https://edu.gtf.pt/admin/tool/certificate/index.php?code=955580331RT',
      certificateImageUrl: 'https://drive.google.com/file/d/1Rls7edg3-hHUzaw0LefvlXX2hMOfb8nv/view?usp=sharing',
      duration: 'Professional Level',
      level: 'Professional',
      icon: '💻'
    },
    {
      id: 6,
      title: 'Certificate of Internship on Web Development Technologies',
      issuer: 'Allenhouse Institute of Technology',
      date: 'Completed',
      type: 'Internship',
      image: 'https://images.unsplash.com/photo-1616856122542-c3cd64d2dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGxlbmhvdXNlJTIwY29sbGVnZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1Nzc4MzIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Intensive 60-hour internship program focusing on practical web development technologies and real-world applications.',
      skills: ['Web Development Technologies', 'Practical Application', 'Project Development'],
      credentialId: 'Internship Certificate',
      credentialUrl: 'https://allenhouse.ac.in',
      certificateImageUrl: 'https://drive.google.com/file/d/1sBabrSxzSlHCsPwQYsxjlhf0GCMLMeMV/view?usp=sharing',
      duration: '60 hours',
      level: 'Practical',
      icon: '🏢'
    },
    {
      id: 7,
      title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
      issuer: 'Microsoft and LinkedIn',
      date: 'November 7, 2024',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1569677917811-08ceb8e42aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBBSSUyMGNlcnRpZmljYXRpb258ZW58MXx8fHwxNTc3NzgzOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive course on generative AI technologies, computer ethics, and artificial intelligence applications.',
      skills: ['Computer Ethics', 'Artificial Intelligence (AI)', 'Generative AI', 'Microsoft Technologies'],
      credentialId: '229531a9244a59b23f1562204cb975c36f9cbde269ca57209f8c370facefab6f',
      credentialUrl: 'https://www.linkedin.com/learning/',
      certificateImageUrl: 'https://drive.google.com/file/d/1NagKNKz9FLDKwqGSWg6ddQ0FRePdebRu/view?usp=sharing',
      duration: '4 hours 53 minutes',
      level: 'Advanced',
      icon: '🤖'
    },
    {
      id: 8,
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      issuer: 'IBM (via Coursera)',
      date: 'December 30, 2022',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzU3NzAzNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'IBM-certified introduction to web development covering HTML5, CSS3, and JavaScript fundamentals.',
      skills: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'IBM Certification'],
      credentialId: 'Coursera Verified',
      credentialUrl: 'https://coursera.org/verify/K6B26NW48LSU',
      certificateImageUrl: 'https://drive.google.com/file/d/1guyD_iG4QcfmY6lMEGVFU5nS_vesBGnm/view?usp=sharing',
      duration: 'Course Completion',
      level: 'Beginner',
      icon: '🔵'
    },
    {
      id: 9,
      title: 'Data Storytelling for Data Professionals',
      issuer: 'Udemy',
      date: 'October 24, 2024',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNlbCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1Nzc4Mzk1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced course on data storytelling techniques and visualization methods for professional data presentation.',
      skills: ['Data Storytelling', 'Data Visualization', 'Analytics', 'Professional Communication'],
      credentialId: 'UC-15034bd2-1e75-4fee-b37f-569ec7fc7b4a',
      credentialUrl: 'https://ude.my/UC-15034bd2-1e75-4fee-b37f-569ec7fc7b4a',
      certificateImageUrl: 'https://drive.google.com/file/d/1Uzn7_cyDX0svSY8jeL8xL9IzSfT6wG5W/view?usp=sharing',
      duration: '1.5 total hours',
      level: 'Intermediate',
      icon: '📈'
    },
    {
      id: 10,
      title: 'Database Management System',
      issuer: 'Udemy',
      date: 'February 19, 2025',
      type: 'Professional',
      image: 'https://images.unsplash.com/photo-1741958193874-6ef299f6b053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNTc3NzY3MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive course covering database design, management, and optimization techniques for modern applications.',
      skills: ['Database Management System', 'SQL', 'Database Design', 'Data Management'],
      credentialId: 'UC-403431f6d-1586-4547-8d5c-44c29fb78765',
      credentialUrl: 'https://ude.my/UC-403431f6d-1586-4547-8d5c-44c29fb78765',
      certificateImageUrl: 'https://drive.google.com/file/d/1m4GRw7gjddR8mokoyfjUFsL-9nlmmsC2/view?usp=sharing',
      duration: '1.5 total hours',
      level: 'Intermediate',
      icon: '🗄️'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Website Development Competition',
      position: '1st Place Winner',
      date: 'October 7, 2023',
      organizer: 'Allenhouse Institute of Technology',
      description: 'Won first place in college-level website development competition with theme given on the spot, demonstrating exceptional quick problem-solving and technical skills under pressure.',
      prize: '₹2000 Prize Money',
      team: 'Individual Competition',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Quick Development', 'Problem Solving'],
      icon: '🏆',
      certificateImageUrl: 'https://drive.google.com/file/d/1yArtagWJPGswJQ_njrE3pHY9CcM2Gr82/view?usp=sharing',
      additionalImages: ['https://drive.google.com/file/d/1QWOGa8stJWM-JlfcIRLZ1f7xGHC0w0pi/view?usp=sharing']
    },
    {
      id: 2,
      title: 'ANVESHAN 2025 Science Quiz',
      position: '1st Place Winner',
      date: 'February 28, 2025',
      organizer: 'Allenhouse Institute of Technology',
      description: 'Achieved first place in ANVESHAN 2025 science quiz test, demonstrating comprehensive technical knowledge and scientific understanding across multiple domains.',
      prize: 'Gold Medal & Certificate of Excellence',
      team: 'Individual Competition',
      technologies: ['Scientific Knowledge', 'Technical Aptitude', 'Research Skills', 'Academic Excellence'],
      icon: '🧠',
      certificateImageUrl: 'https://drive.google.com/file/d/1iBLGUHyx3grpZxweSGufDytdumG5ibmQ/view?usp=sharing',
      additionalImages: ['https://drive.google.com/file/d/17q-NSDzOY8853slbm2p2iHEFr23oP5dA/view?usp=sharing']
    },
    {
      id: 3,
      title: 'Aptitude Challenge Of Code2Career',
      position: '159th Rank Globally',
      date: 'April 27, 2025',
      organizer: 'Lets Code',
      description: 'Secured impressive 159th rank globally in comprehensive aptitude challenge covering numerical ability, reasoning, and verbal skills among thousands of participants worldwide.',
      prize: 'Global Recognition Certificate',
      team: 'Individual Competition',
      technologies: ['Numerical Ability', 'Logical Reasoning', 'Verbal Skills', 'Competitive Programming', 'Global Competition'],
      icon: '🌍',
      certificateImageUrl: 'https://drive.google.com/file/d/1Y0AP__S9rtTp0NGBX7hCXH-1uti2UtAF/view?usp=sharing'
    }
  ];

  const hackathons = [
    {
      id: 1,
      title: 'HACKSAGON 2025',
      position: 'Finalist',
      date: 'June 27-29, 2025',
      organizer: 'ABV-IIITM IEEE Student Branch, IEEE EPS, AESS Society, and IEEE MP Section',
      description: 'Qualified for the final round after clearing two competitive rounds with team "BITWIZARDS".',
      prize: 'Finalist Certificate',
      team: 'Team BITWIZARDS',
      technologies: ['Problem Solving', 'Innovation', 'Team Collaboration', 'Technical Excellence'],
      icon: '⚡',
      certificateImageUrl: 'https://drive.google.com/file/d/1wiDeKOBnkf87SITcTkY5pLz_CU5ar0kM/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Eurogrip TORQ Challenge 3.0',
      position: 'Participant',
      date: 'Challenge Completed',
      organizer: 'Eurogrip',
      description: 'Participated in Eurogrip TORQ Challenge 3.0 with "Team ppal02439" in Treasure Hunt category.',
      prize: 'Participation Certificate',
      team: 'Team ppal02439',
      technologies: ['Treasure Hunt', 'Strategic Thinking', 'Team Work', 'Challenge Solving'],
      icon: '🎯',
      certificateImageUrl: 'https://drive.google.com/file/d/1DzkTpAwEoYj9UgEDeZurPbxQOoRoGJ1N/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Mind Installer',
      position: 'Participant',
      date: 'May 11, 2025',
      organizer: 'IIMT College of Engineering, Institution\'s Innovation Council, IIMT Student Branch, and Google Developer Groups',
      description: 'Participated with "Team BitWizards" in innovative technology challenge organized by multiple tech communities.',
      prize: 'Participation Certificate',
      team: 'Team BitWizards (4 members)',
      technologies: ['Innovation', 'Technology Challenge', 'Google Developer Groups', 'Collaborative Development'],
      icon: '💡',
      certificateImageUrl: 'https://drive.google.com/file/d/1wxYt0kmlk2Dr92OhxUb6ApAX0klTpaUx/view?usp=sharing'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(certificates.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(certificates.length / 2)) % Math.ceil(certificates.length / 2));
  };

  // Function to handle certificate verification
  const handleVerification = (certificate: any) => {
    // First try to open the certificate image from Google Drive
    if (certificate.certificateImageUrl) {
      window.open(certificate.certificateImageUrl, '_blank');
    } else if (certificate.credentialUrl && certificate.credentialUrl !== '#') {
      // Fallback to credential URL if no certificate image
      window.open(certificate.credentialUrl, '_blank');
    }
  };

  return (
    <section id="certificates" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications, course completions, and competition achievements that validate my expertise
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Certifications (10 Certificates)
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <ImageWithFallback
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${
                          cert.type === 'Professional' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          cert.type === 'Diploma' ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                          'bg-gradient-to-r from-green-500 to-emerald-500'
                        } text-white`}>
                          {cert.type}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 text-2xl">
                        {cert.icon}
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant={cert.level === 'Advanced' ? 'default' : 'secondary'}>
                          {cert.level}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-bold mb-2 line-clamp-2 min-h-[3rem]">{cert.title}</h4>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {cert.date}
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                        {cert.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2 text-sm">Key Skills:</h5>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {cert.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{cert.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {cert.credentialId && (
                          <div className="text-xs text-muted-foreground">
                            <strong>ID:</strong> {cert.credentialId.length > 20 ? cert.credentialId.substring(0, 20) + '...' : cert.credentialId}
                          </div>
                        )}
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            onClick={() => handleVerification(cert)}
                            className="flex-1"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View Certificate
                          </Button>
                          {cert.credentialUrl && cert.credentialUrl !== '#' && cert.credentialUrl !== 'https://allenhouse.ac.in' && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => window.open(cert.credentialUrl, '_blank')}
                              className="flex-1"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Verify
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competition Achievements */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Competition Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {achievements.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold line-clamp-2">{award.title}</h4>
                        </div>
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white mb-2">
                          {award.position}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {award.date}
                      </div>
                      <div className="text-muted-foreground">
                        <strong>Organizer:</strong> {award.organizer}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>
                      
                      <div className="grid grid-cols-1 gap-2 pt-2">
                        <div>
                          <span className="font-medium text-green-600">Prize:</span>
                          <span className="ml-1">{award.prize}</span>
                        </div>
                        <div>
                          <span className="font-medium">Team:</span>
                          <span className="ml-1">{award.team}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <h5 className="font-medium mb-1 text-xs">Technologies:</h5>
                        <div className="flex flex-wrap gap-1">
                          {award.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {award.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{award.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="pt-3">
                        <Button 
                          size="sm" 
                          onClick={() => window.open(award.certificateImageUrl, '_blank')}
                          className="w-full"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathon Participations */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Hackathon Participations
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">
                        {hackathon.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2 line-clamp-2">{hackathon.title}</h4>
                        <Badge className={`${
                          hackathon.position === 'Finalist' ? 
                          'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                          'bg-gradient-to-r from-blue-400 to-blue-600'
                        } text-white mb-2`}>
                          {hackathon.position}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {hackathon.date}
                      </div>
                      <div className="text-muted-foreground">
                        <strong>Organizer:</strong> {hackathon.organizer}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {hackathon.description}
                      </p>
                      
                      <div className="grid grid-cols-1 gap-2 pt-2">
                        <div>
                          <span className="font-medium text-purple-600">Achievement:</span>
                          <span className="ml-1">{hackathon.prize}</span>
                        </div>
                        <div>
                          <span className="font-medium">Team:</span>
                          <span className="ml-1">{hackathon.team}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <h5 className="font-medium mb-1 text-xs">Focus Areas:</h5>
                        <div className="flex flex-wrap gap-1">
                          {hackathon.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {hackathon.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{hackathon.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="pt-3">
                        <Button 
                          size="sm" 
                          onClick={() => window.open(hackathon.certificateImageUrl, '_blank')}
                          className="w-full"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Certifications', value: '10', icon: '📜' },
              { label: 'Competitions Won', value: '3', icon: '🏆' },
              { label: 'Hackathons', value: '3', icon: '⚡' },
              { label: 'Global Rank', value: '159th', icon: '🌍' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}