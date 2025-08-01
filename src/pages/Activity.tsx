import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, DollarSign, Shield, Trophy, Zap, TrendingUp, Users } from "lucide-react";

const Activity = () => {
  const recentActivities = [
    {
      id: 1,
      type: "bounty_submission",
      user: { name: "Rahul Sharma", avatar: "RS", image: null },
      action: "submitted a critical vulnerability",
      target: "TechCorp Security Program",
      reward: "₹2,50,000",
      time: "2 hours ago",
      severity: "Critical"
    },
    {
      id: 2,
      type: "bounty_reward",
      user: { name: "Priya Patel", avatar: "PP", image: null },
      action: "received bounty reward",
      target: "FinanceSecure Bug Bounty",
      reward: "₹75,000",
      time: "4 hours ago",
      severity: "High"
    },
    {
      id: 3,
      type: "program_launch",
      user: { name: "SecureBank", avatar: "SB", image: null },
      action: "launched new bug bounty program",
      target: "Banking Platform Security",
      reward: "₹10,00,000",
      time: "6 hours ago",
      severity: "Program"
    },
    {
      id: 4,
      type: "course_completion",
      user: { name: "Arjun Singh", avatar: "AS", image: null },
      action: "completed course",
      target: "Advanced Penetration Testing",
      reward: "Certificate",
      time: "8 hours ago",
      severity: "Education"
    },
    {
      id: 5,
      type: "leaderboard",
      user: { name: "Sneha Verma", avatar: "SV", image: null },
      action: "reached #5 position",
      target: "Monthly Leaderboard",
      reward: "₹1,25,000",
      time: "12 hours ago",
      severity: "Achievement"
    },
    {
      id: 6,
      type: "bounty_submission",
      user: { name: "Vikash Kumar", avatar: "VK", image: null },
      action: "submitted vulnerability",
      target: "E-Commerce Security Challenge",
      reward: "₹45,000",
      time: "1 day ago",
      severity: "Medium"
    }
  ];

  const trending = [
    { program: "TechCorp Security Program", submissions: 145, growth: "+23%" },
    { program: "FinanceSecure Bug Bounty", submissions: 89, growth: "+15%" },
    { program: "E-Commerce Security Challenge", submissions: 67, growth: "+31%" },
    { program: "Healthcare Data Protection", submissions: 42, growth: "+8%" }
  ];

  const topHunters = [
    { rank: 1, name: "CyberNinja", earnings: "₹12,45,000", bugs: 247 },
    { rank: 2, name: "SecGuardian", earnings: "₹9,87,000", bugs: 189 },
    { rank: 3, name: "BugHunter_Pro", earnings: "₹8,34,000", bugs: 156 },
    { rank: 4, name: "WhiteHat_Elite", earnings: "₹7,92,000", bugs: 134 },
    { rank: 5, name: "VulnFinder", earnings: "₹6,78,000", bugs: 112 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "bounty_submission": return <Shield className="h-4 w-4" />;
      case "bounty_reward": return <DollarSign className="h-4 w-4" />;
      case "program_launch": return <Zap className="h-4 w-4" />;
      case "course_completion": return <Trophy className="h-4 w-4" />;
      case "leaderboard": return <TrendingUp className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "critical";
      case "high": return "high";
      case "medium": return "medium";
      case "low": return "low";
      case "program": return "success";
      case "education": return "secondary";
      case "achievement": return "accent";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              📊 Real-time Community Activity
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community <span className="text-primary">Activity</span>
              <br />& Live Updates
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest bug bounty submissions, rewards, program launches, and community achievements in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">342</div>
              <div className="text-sm text-muted-foreground">Bugs Submitted Today</div>
            </Card>
            <Card className="text-center p-6">
              <DollarSign className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-1">₹25L</div>
              <div className="text-sm text-muted-foreground">Rewards Paid This Week</div>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-medium mx-auto mb-3" />
              <div className="text-3xl font-bold text-medium mb-1">1,247</div>
              <div className="text-sm text-muted-foreground">Active Hunters</div>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-high mx-auto mb-3" />
              <div className="text-3xl font-bold text-high mb-1">89</div>
              <div className="text-sm text-muted-foreground">New Programs</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Activity Feed */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <Button variant="outline" size="sm">
                  <Clock className="h-4 w-4 mr-2" />
                  Live Feed
                </Button>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <Card key={activity.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={activity.user.image || undefined} />
                          <AvatarFallback>{activity.user.avatar}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            {getActivityIcon(activity.type)}
                            <span className="font-medium">{activity.user.name}</span>
                            <span className="text-muted-foreground">{activity.action}</span>
                          </div>
                          
                          <div className="text-sm text-muted-foreground mb-2">
                            {activity.target}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge variant={getSeverityColor(activity.severity) as any} className="text-xs">
                                {activity.severity}
                              </Badge>
                              <span className="text-sm font-medium text-accent">
                                {activity.reward}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {activity.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline">Load More Activities</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Trending Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Trending Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trending.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{item.program}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.submissions} submissions
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.growth}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Hunters */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    Top Hunters This Month
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topHunters.map((hunter) => (
                    <div key={hunter.rank} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                        {hunter.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{hunter.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {hunter.bugs} bugs • {hunter.earnings}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" size="sm">
                    Submit Bug Report
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Join New Program
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    View My Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activity;