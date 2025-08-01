import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SecurityResearchHub from "@/components/SecurityResearchHub";
import FAQAndContact from "@/components/FAQAndContact";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  BookOpen,
  Target,
  TrendingUp,
  Award
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Target className="h-4 w-4 mr-2" />
            Security Dashboard
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Welcome to Your Security Hub
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your central command center for bug bounty hunting, security research, and skill development. 
            Everything you need to succeed in cybersecurity.
          </p>
        </div>

        {/* Security Research Hub Component */}
        <SecurityResearchHub />

        {/* Stats Section */}
        <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
          <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Your Progress Overview</h2>
              <p className="text-muted-foreground">Track your journey in security research</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Reports Submitted", value: "24", icon: FileText, color: "text-blue-600" },
                { label: "Valid Reports", value: "22", icon: Award, color: "text-green-600" },
                { label: "Total Earnings", value: "₹45,000", icon: TrendingUp, color: "text-purple-600" },
                { label: "Courses Completed", value: "3", icon: BookOpen, color: "text-orange-600" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-background rounded-full shadow-sm">
                        <IconComponent className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* FAQ and Contact Section */}
        <FAQAndContact />

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">Ready to Level Up Your Security Skills?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of security researchers who are earning while learning. 
                Start your journey today with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  <Target className="h-5 w-5 mr-2" />
                  Start Bug Hunting
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Courses
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;