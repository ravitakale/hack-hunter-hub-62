import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { Separator } from "@/components/ui/separator";
import { 
  Edit,
  Calendar,
  FileText,
  Building2,
  Globe,
  Lock,
  DollarSign,
  Shield,
  Users,
  Eye,
  CheckCircle2
} from "lucide-react";

// Mock data - in real app this would come from API
const mockProgram = {
  id: 1,
  name: "Web Application Security",
  description: "Comprehensive security testing for our main web application platform. We're looking for security researchers to help identify vulnerabilities in our core web application that serves millions of users daily.",
  status: "Public",
  reportsCount: 45,
  createdOn: "2024-01-15",
  scope: [
    "Main web application (app.company.com)",
    "API endpoints (api.company.com)",
    "Authentication system",
    "Payment processing"
  ],
  outOfScope: [
    "Third-party integrations",
    "Social engineering attacks",
    "Physical security",
    "DDoS attacks"
  ],
  rewardRange: {
    min: "₹5,000",
    max: "₹2,50,000"
  },
  severityRewards: {
    low: "₹5,000 - ₹15,000",
    medium: "₹15,000 - ₹50,000", 
    high: "₹50,000 - ₹1,50,000",
    critical: "₹1,50,000 - ₹2,50,000"
  },
  guidelines: [
    "Provide clear steps to reproduce",
    "Include proof of concept when possible",
    "Do not access or modify user data",
    "Report responsibly and allow time for fixes"
  ],
  contacts: {
    security: "security@company.com",
    program: "bugbounty@company.com"
  },
  metrics: {
    activeResearchers: 67,
    totalSubmissions: 156,
    averageResponseTime: "2.3 days",
    rewardsPaid: "₹18,50,000"
  }
};

export default function OrganizationProgramView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program] = useState(mockProgram);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/org-programs")}
                    className="text-muted-foreground"
                  >
                    ← Back to Programs
                  </Button>
                </div>
                <Button onClick={() => navigate(`/org-program/${id}/edit`)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Program
                </Button>
              </div>

              {/* Program Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{program.name}</CardTitle>
                        <div className="flex items-center space-x-4">
                          <Badge 
                            variant={program.status === 'Public' ? 'default' : 'secondary'}
                            className="flex items-center space-x-1"
                          >
                            {program.status === 'Public' ? (
                              <Globe className="h-3 w-3" />
                            ) : (
                              <Lock className="h-3 w-3" />
                            )}
                            <span>{program.status}</span>
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Created {new Date(program.createdOn).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.reportsCount}</div>
                    <div className="text-sm text-muted-foreground">Total Reports</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.activeResearchers}</div>
                    <div className="text-sm text-muted-foreground">Active Researchers</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.rewardsPaid}</div>
                    <div className="text-sm text-muted-foreground">Rewards Paid</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.averageResponseTime}</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Scope */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="h-5 w-5" />
                      <span>In Scope</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {program.scope.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Out of Scope */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Out of Scope</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {program.outOfScope.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-red-100 flex items-center justify-center">
                          <div className="h-2 w-2 bg-red-600 rounded-full" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Rewards */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Reward Structure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 rounded-lg bg-red-50 border border-red-200">
                      <Badge variant="destructive" className="mb-2">Critical</Badge>
                      <div className="text-sm font-medium">{program.severityRewards.critical}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-orange-50 border border-orange-200">
                      <Badge variant="destructive" className="mb-2 bg-orange-600">High</Badge>
                      <div className="text-sm font-medium">{program.severityRewards.high}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                      <Badge variant="secondary" className="mb-2 bg-yellow-600 text-white">Medium</Badge>
                      <div className="text-sm font-medium">{program.severityRewards.medium}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-green-50 border border-green-200">
                      <Badge variant="secondary" className="mb-2 bg-green-600 text-white">Low</Badge>
                      <div className="text-sm font-medium">{program.severityRewards.low}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {program.guidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">{guideline}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Security Team</div>
                      <div className="text-sm text-muted-foreground">{program.contacts.security}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Bug Bounty Program</div>
                      <div className="text-sm text-muted-foreground">{program.contacts.program}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}