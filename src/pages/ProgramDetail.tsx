import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  DollarSign, 
  Calendar, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowLeft,
  ExternalLink,
  Heart,
  MessageSquare,
  Star
} from "lucide-react";

const ProgramDetail = () => {
  const { id } = useParams();

  // Demo data for the program detail
  const program = {
    id: 1,
    title: "Flipkart Bug Bounty",
    company: "Flipkart",
    logo: "🛒",
    type: "Public",
    status: "Open",
    category: "Retail",
    description: "Help secure India's largest e-commerce platform",
    minReward: "₹10,000",
    maxReward: "₹5,00,000",
    participants: 1247,
    submissions: 3456,
    resolved: 892,
    averageTime: "7 days"
  };

  const bounties = [
    { severity: "Critical", reward: "₹3,00,000 - ₹5,00,000", description: "Authentication bypass, SQL injection in core systems" },
    { severity: "High", reward: "₹1,00,000 - ₹2,50,000", description: "XSS, CSRF, privilege escalation" },
    { severity: "Medium", reward: "₹25,000 - ₹75,000", description: "Information disclosure, business logic flaws" },
    { severity: "Low", reward: "₹10,000 - ₹25,000", description: "Minor security issues, configuration problems" }
  ];

  const rulesOfEngagement = [
    "Only test on your own accounts",
    "No DDoS or spam", 
    "Respect user privacy",
    "Do not access or modify user data",
    "Report vulnerabilities responsibly",
    "No social engineering attacks"
  ];

  const recentActivity = [
    {
      id: 1,
      type: "Submission accepted",
      target: "*.chloe.com",
      points: "P3",
      researcher: "john_doe",
      date: "2 Jul 2024",
      status: "accepted"
    },
    {
      id: 2,
      type: "Submission accepted", 
      target: "app.aaitlabs.com",
      points: "P4",
      researcher: "security_ninja",
      date: "28 Jun 2024",
      status: "accepted"
    },
    {
      id: 3,
      type: "Submission accepted",
      target: "*.chloe.com",
      points: "P2",
      researcher: "bug_hunter_pro",
      date: "5 Jun 2024", 
      status: "accepted"
    }
  ];

  const hallOfFame = [
    { name: "alex_sec", avatar: "👨‍💻", points: 2840 },
    { name: "cyber_queen", avatar: "👩‍💻", points: 2156 },
    { name: "bug_master", avatar: "🔍", points: 1923 },
    { name: "sec_wizard", avatar: "🧙‍♂️", points: 1677 },
    { name: "code_hunter", avatar: "🎯", points: 1445 },
    { name: "vuln_finder", avatar: "🔎", points: 1298 },
    { name: "hack_hero", avatar: "🦸‍♂️", points: 1156 },
    { name: "pen_tester", avatar: "✏️", points: 1043 }
  ];

  const recentlyJoined = [
    { name: "new_hunter", avatar: "🆕", joinDate: "2 days ago" },
    { name: "fresh_eyes", avatar: "👀", joinDate: "3 days ago" },
    { name: "cyber_rookie", avatar: "🚀", joinDate: "5 days ago" },
    { name: "sec_newbie", avatar: "🌟", joinDate: "1 week ago" },
    { name: "bug_starter", avatar: "🐛", joinDate: "1 week ago" },
    { name: "code_seeker", avatar: "🔍", joinDate: "2 weeks ago" },
    { name: "vuln_scout", avatar: "⚡", joinDate: "2 weeks ago" },
    { name: "hack_learner", avatar: "📚", joinDate: "3 weeks ago" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link to="/programs" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>

        {/* Program Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="text-4xl p-3 bg-muted rounded-lg">{program.logo}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">{program.company} / {program.title}</h1>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <Badge variant="secondary">{program.type}</Badge>
              <Badge variant="default">{program.status}</Badge>
              <Badge variant="outline">{program.category}</Badge>
            </div>
          </div>
          <div className="text-right">
            <h3 className="font-semibold mb-2">Want to participate?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Feel free to join in, this is a public engagement where anyone can participate.
            </p>
            <Link to={`/submit-report/${program.id}`} className="block">
              <Button className="w-full mb-2">Create submission</Button>
            </Link>
            <Button variant="outline" className="w-full text-xs">
              View my submissions
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {program.description}
                </p>
              </CardContent>
            </Card>

            {/* Bounties */}
            <Card>
              <CardHeader>
                <CardTitle>Bounties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This is a responsible disclosure program without bounties.
                </p>
                <div className="space-y-3">
                  {bounties.map((bounty, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant={getSeverityColor(bounty.severity)}>
                          {bounty.severity}
                        </Badge>
                        <span className="text-sm">{bounty.description}</span>
                      </div>
                      <span className="font-medium text-sm">{bounty.reward}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules of Engagement */}
            <Card>
              <CardHeader>
                <CardTitle>Rules of engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {rulesOfEngagement.map((rule, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="text-blue-600">{activity.type}</span> on target: <span className="font-mono text-xs">{activity.target}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Accepted on {activity.date}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {activity.points}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hall of Fame & Recently Joined */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Latest hall of famers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {hallOfFame.map((user, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <span className="text-lg">{user.avatar}</span>
                        <span className="text-xs font-medium">{user.name}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="mt-2 p-0 text-xs">
                    See all fame →
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recently joined this engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {recentlyJoined.map((user, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <span className="text-lg">{user.avatar}</span>
                        <span className="text-xs font-medium">{user.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {recentlyJoined.length} total
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Testing problems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    For any testing issues (e.g., broken credential, inaccessible application, etc.) related to this specific program please reach out to the program admin.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Engagement rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    This engagement follows this program's standard disclosure terms. Please review them before testing or reporting.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Coordinated Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Vulnerabilities found in this engagement require explicit permission before publication. Please contact admin for details on the disclosure policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Program Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Program actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Follow program
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Give feedback
                </Button>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Participants</span>
                  <span className="font-medium">{program.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Submissions</span>
                  <span className="font-medium">{program.submissions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Resolved</span>
                  <span className="font-medium">{program.resolved}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Resolution</span>
                  <span className="font-medium">{program.averageTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Scope */}
            <Card>
              <CardHeader>
                <CardTitle>In Scope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono">*.flipkart.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono">api.flipkart.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono">seller.flipkart.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono">mobile apps</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramDetail;