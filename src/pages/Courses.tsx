import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play, ChevronRight } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Application Security Fundamentals",
      instructor: "Dr. Rajesh Kumar",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 2450,
      price: "₹4,999",
      image: "🌐",
      description: "Master the basics of web application security, OWASP Top 10, and common vulnerabilities.",
      modules: ["XSS", "SQL Injection", "CSRF", "Authentication"]
    },
    {
      id: 2,
      title: "Advanced Penetration Testing",
      instructor: "Priya Sharma",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1280,
      price: "₹12,999",
      image: "🔍",
      description: "Deep dive into penetration testing methodologies, tools, and real-world scenarios.",
      modules: ["Network Pentesting", "Web App Testing", "Mobile Security", "Reporting"]
    },
    {
      id: 3,
      title: "Bug Bounty Hunting Mastery",
      instructor: "Arjun Singh",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 3200,
      price: "₹8,999",
      image: "🎯",
      description: "Learn professional bug bounty hunting techniques and maximize your earnings.",
      modules: ["Reconnaissance", "Vulnerability Analysis", "Exploitation", "Reporting"]
    },
    {
      id: 4,
      title: "Mobile Application Security",
      instructor: "Sneha Patel",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 1850,
      price: "₹6,999",
      image: "📱",
      description: "Comprehensive mobile app security testing for Android and iOS platforms.",
      modules: ["Static Analysis", "Dynamic Analysis", "Runtime Testing", "Secure Coding"]
    },
    {
      id: 5,
      title: "Cloud Security Assessment",
      instructor: "Vikash Gupta",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.8,
      students: 980,
      price: "₹10,999",
      image: "☁️",
      description: "Master cloud security assessment across AWS, Azure, and GCP platforms.",
      modules: ["IAM Security", "Container Security", "Serverless Security", "Compliance"]
    },
    {
      id: 6,
      title: "API Security Testing",
      instructor: "Rohit Verma",
      duration: "4 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 1650,
      price: "₹3,999",
      image: "🔗",
      description: "Specialized course on API security testing and vulnerability assessment.",
      modules: ["REST API Testing", "GraphQL Security", "OAuth Testing", "Rate Limiting"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner": return "low";
      case "intermediate": return "medium";
      case "advanced": return "high";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              🎓 Learn from Industry Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Master <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cybersecurity</span>
              <br />with Expert-Led Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Advance your cybersecurity skills with comprehensive courses designed by industry professionals and bug bounty experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg hover:bg-accent hover:text-accent-foreground border-2 hover:border-accent transition-all duration-300 hover:scale-105">
                View Free Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-muted/30 via-muted/10 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Expert Courses", color: "text-primary" },
              { value: "15K+", label: "Students Enrolled", color: "text-accent" },
              { value: "4.8", label: "Average Rating", color: "text-medium" },
              { value: "95%", label: "Completion Rate", color: "text-high" }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-muted/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive curriculum designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="group relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl p-3 bg-muted/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {course.image}
                    </div>
                    <Badge variant={getLevelColor(course.level) as any} className="shadow-sm">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {course.instructor}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 relative">
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-accent fill-current" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {course.students.toLocaleString()} students
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {course.modules.slice(0, 3).map((module) => (
                      <Badge key={module} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                        {module}
                      </Badge>
                    ))}
                    {course.modules.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.modules.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      {course.price}
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <span className="group-hover:scale-105 transition-transform">Enroll Now</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Paths</h2>
            <p className="text-xl text-muted-foreground">
              Structured learning journeys to guide your cybersecurity career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🛡️",
                title: "Security Analyst Path",
                description: "Perfect for beginners looking to start a career in cybersecurity"
              },
              {
                emoji: "🔒",
                title: "Penetration Tester Path", 
                description: "Advanced path for ethical hackers and penetration testers"
              },
              {
                emoji: "🏆",
                title: "Bug Bounty Hunter Path",
                description: "Specialized training for professional bug bounty hunters"
              }
            ].map((path, index) => (
              <Card key={index} className="group text-center p-8 border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{path.emoji}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{path.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {path.description}
                  </p>
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all duration-300 hover:scale-105">
                    View Path
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;