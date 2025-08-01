import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { ResearcherProfileDialog } from "@/components/ResearcherProfileDialog";
import { ResearcherMessageDialog } from "@/components/ResearcherMessageDialog";
import { useState } from "react";

const Leaderboard = () => {
  const [selectedResearcher, setSelectedResearcher] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const topResearchers = [
    {
      id: 1,
      rank: 1,
      name: "Akash Kumar",
      email: "akash.kumar@security.com",
      username: "akash_hunter",
      avatar: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹12,50,000",
      bugsFound: 156,
      reputation: 9850,
      country: "India",
      speciality: "Web Security",
      rating: 4.9,
      level: "Expert",
      status: "Active",
      location: "Mumbai, India",
      joinedDate: "Jan 2023",
      specialties: ["Web Security", "SQL Injection", "XSS", "Authentication"],
      reports: 156,
      validReports: 148,
      earnings: 125000,
      avgSeverity: "High",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      rank: 2,
      name: "Priya Sharma",
      email: "priya.sharma@security.com",
      username: "priya_sec",
      avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹10,80,000",
      bugsFound: 134,
      reputation: 9240,
      country: "India",
      speciality: "Mobile Security",
      rating: 4.8,
      level: "Advanced",
      status: "Active",
      location: "Delhi, India",
      joinedDate: "Mar 2023",
      specialties: ["Mobile Security", "Android", "iOS", "API Security"],
      reports: 134,
      validReports: 128,
      earnings: 108000,
      avgSeverity: "Medium",
      lastActive: "1 hour ago"
    },
    {
      id: 3,
      rank: 3,
      name: "Rahul Singh",
      email: "rahul.singh@security.com",
      username: "rahul_cyber",
      avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹9,75,000",
      bugsFound: 121,
      reputation: 8890,
      country: "India",
      speciality: "API Security",
      rating: 4.7,
      level: "Advanced",
      status: "Active",
      location: "Bangalore, India",
      joinedDate: "Feb 2023",
      specialties: ["API Security", "REST", "GraphQL", "Authentication"],
      reports: 121,
      validReports: 115,
      earnings: 97500,
      avgSeverity: "High",
      lastActive: "3 hours ago"
    },
    {
      id: 4,
      rank: 4,
      name: "Sneha Patel",
      email: "sneha.patel@security.com",
      username: "sneha_bugs",
      avatar: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹8,90,000",
      bugsFound: 108,
      reputation: 8320,
      country: "India",
      speciality: "Cloud Security",
      rating: 4.6,
      level: "Intermediate",
      status: "Active",
      location: "Pune, India",
      joinedDate: "Apr 2023",
      specialties: ["Cloud Security", "AWS", "Docker", "Kubernetes"],
      reports: 108,
      validReports: 102,
      earnings: 89000,
      avgSeverity: "Medium",
      lastActive: "5 hours ago"
    },
    {
      id: 5,
      rank: 5,
      name: "Arjun Gupta",
      email: "arjun.gupta@security.com",
      username: "arjun_hacker",
      avatar: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹7,65,000",
      bugsFound: 95,
      reputation: 7890,
      country: "India",
      speciality: "IoT Security",
      rating: 4.5,
      level: "Intermediate",
      status: "Active",
      location: "Chennai, India",
      joinedDate: "May 2023",
      specialties: ["IoT Security", "Hardware", "Firmware", "Wireless"],
      reports: 95,
      validReports: 90,
      earnings: 76500,
      avgSeverity: "Medium",
      lastActive: "1 day ago"
    }
  ];

  const handleResearcherClick = (researcher: any) => {
    setSelectedResearcher(researcher);
    setShowProfile(true);
  };

  const handleMessageClick = () => {
    setShowProfile(false);
    setShowMessage(true);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) return "critical";
    if (rank <= 10) return "high";
    if (rank <= 50) return "medium";
    return "low";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Security Researchers Leaderboard</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Top bug hunters making the internet safer, one vulnerability at a time
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Researchers</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl lg:text-2xl font-bold">10,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bugs Found</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,678</div>
              <p className="text-xs text-muted-foreground">This month: 1,234</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bounties</CardTitle>
              <Medal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.5Cr+</div>
              <p className="text-xs text-muted-foreground">Paid to researchers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active This Week</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,845</div>
              <p className="text-xs text-muted-foreground">Researchers hunting</p>
            </CardContent>
          </Card>
        </div>

        {/* Top 3 Podium - Enhanced & Interactive */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {/* Mobile: Show Champion First */}
          <div className="block md:hidden order-1 text-center animate-fade-in w-full max-w-sm mx-auto">
            <div 
              className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6 mb-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 dark:border-yellow-600 relative overflow-hidden"
              onClick={() => handleResearcherClick(topResearchers[0])}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-orange-400/10 animate-pulse"></div>
              <div className="relative z-10">
                <div className="relative mb-4">
                  <Avatar className="h-20 w-20 mx-auto ring-4 ring-yellow-300 dark:ring-yellow-500 shadow-lg">
                    <AvatarImage src={topResearchers[0].avatar} alt={topResearchers[0].name} />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-800 dark:to-amber-800 text-yellow-800 dark:text-yellow-200">AK</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-yellow-400 dark:bg-yellow-500 rounded-full p-1.5 shadow-lg">
                      <Trophy className="h-6 w-6 text-yellow-800 dark:text-yellow-900" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-100">{topResearchers[0].name}</h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">@{topResearchers[0].username}</p>
                <div className="space-y-1">
                  <div className="text-xl font-bold text-yellow-800 dark:text-yellow-200">{topResearchers[0].totalBounty}</div>
                  <div className="text-sm text-yellow-700 dark:text-yellow-300">{topResearchers[0].bugsFound} bugs found</div>
                  <div className="text-sm text-yellow-700 dark:text-yellow-300">⭐ {topResearchers[0].rating} rating</div>
                </div>
              </div>
            </div>
            <Badge variant="default" className="text-sm px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 font-semibold">
              <Trophy className="h-4 w-4 mr-2" />
              🏆 Champion
            </Badge>
          </div>

          {/* Second and Third Place on Mobile */}
          <div className="grid grid-cols-2 gap-3 md:hidden order-2 w-full">
            {/* Second Place Mobile */}
            <div className="text-center animate-fade-in">
              <div 
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 mb-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-200 dark:border-slate-700"
                onClick={() => handleResearcherClick(topResearchers[1])}
              >
                <div className="relative">
                  <Avatar className="h-16 w-16 mx-auto mb-3 ring-3 ring-slate-300 dark:ring-slate-600">
                    <AvatarImage src={topResearchers[1].avatar} alt={topResearchers[1].name} />
                    <AvatarFallback className="text-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">PS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1">
                    <Medal className="h-6 w-6 text-slate-500 fill-slate-400" />
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1">{topResearchers[1].name}</h3>
                <p className="text-xs text-muted-foreground mb-2">@{topResearchers[1].username}</p>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-600 dark:text-slate-400">{topResearchers[1].totalBounty}</div>
                  <div className="text-xs text-muted-foreground">{topResearchers[1].bugsFound} bugs</div>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800">
                2nd
              </Badge>
            </div>

            {/* Third Place Mobile */}
            <div className="text-center animate-fade-in">
              <div 
                className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-4 mb-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-200 dark:border-amber-700"
                onClick={() => handleResearcherClick(topResearchers[2])}
              >
                <div className="relative">
                  <Avatar className="h-16 w-16 mx-auto mb-3 ring-3 ring-amber-300 dark:ring-amber-600">
                    <AvatarImage src={topResearchers[2].avatar} alt={topResearchers[2].name} />
                    <AvatarFallback className="text-sm bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200">RS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1">
                    <Award className="h-6 w-6 text-amber-600 fill-amber-500" />
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1">{topResearchers[2].name}</h3>
                <p className="text-xs text-muted-foreground mb-2">@{topResearchers[2].username}</p>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-amber-700 dark:text-amber-500">{topResearchers[2].totalBounty}</div>
                  <div className="text-xs text-muted-foreground">{topResearchers[2].bugsFound} bugs</div>
                </div>
              </div>
              <Badge variant="outline" className="text-xs px-2 py-1 border-amber-300 text-amber-700 dark:border-amber-600 dark:text-amber-400">
                3rd
              </Badge>
            </div>
          </div>

          {/* Desktop: Traditional Podium Layout */}
          <div className="hidden md:flex justify-center items-end gap-6">
            {/* Second Place */}
            <div className="text-center animate-fade-in">
              <div 
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 mb-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-200 dark:border-slate-700"
                onClick={() => handleResearcherClick(topResearchers[1])}
              >
                <div className="relative">
                  <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-slate-300 dark:ring-slate-600">
                    <AvatarImage src={topResearchers[1].avatar} alt={topResearchers[1].name} />
                    <AvatarFallback className="text-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">PS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2">
                    <Medal className="h-8 w-8 text-slate-500 fill-slate-400" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{topResearchers[1].name}</h3>
                <p className="text-sm text-muted-foreground mb-3">@{topResearchers[1].username}</p>
                <div className="space-y-1">
                  <div className="text-xl font-bold text-slate-600 dark:text-slate-400">{topResearchers[1].totalBounty}</div>
                  <div className="text-sm text-muted-foreground">{topResearchers[1].bugsFound} bugs found</div>
                  <div className="text-xs text-muted-foreground">⭐ {topResearchers[1].rating} rating</div>
                </div>
              </div>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-slate-100 dark:bg-slate-800">
                <Medal className="h-4 w-4 mr-2" />
                2nd Place
              </Badge>
            </div>

            {/* First Place - Champion */}
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div 
                className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30 rounded-2xl p-8 mb-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 dark:border-yellow-600 relative overflow-hidden"
                onClick={() => handleResearcherClick(topResearchers[0])}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-orange-400/10 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="relative mb-4">
                    <Avatar className="h-28 w-28 mx-auto ring-6 ring-yellow-300 dark:ring-yellow-500 shadow-lg">
                      <AvatarImage src={topResearchers[0].avatar} alt={topResearchers[0].name} />
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-800 dark:to-amber-800 text-yellow-800 dark:text-yellow-200">AK</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-yellow-400 dark:bg-yellow-500 rounded-full p-2 shadow-lg">
                        <Trophy className="h-8 w-8 text-yellow-800 dark:text-yellow-900" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl mb-2 text-yellow-900 dark:text-yellow-100">{topResearchers[0].name}</h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">@{topResearchers[0].username}</p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">{topResearchers[0].totalBounty}</div>
                    <div className="text-sm text-yellow-700 dark:text-yellow-300">{topResearchers[0].bugsFound} bugs found</div>
                    <div className="text-sm text-yellow-700 dark:text-yellow-300">⭐ {topResearchers[0].rating} rating • {topResearchers[0].level}</div>
                  </div>
                </div>
              </div>
              <Badge variant="default" className="text-sm px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 font-semibold">
                <Trophy className="h-4 w-4 mr-2" />
                🏆 Champion
              </Badge>
            </div>

            {/* Third Place */}
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div 
                className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6 mb-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-200 dark:border-amber-700"
                onClick={() => handleResearcherClick(topResearchers[2])}
              >
                <div className="relative">
                  <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-amber-300 dark:ring-amber-600">
                    <AvatarImage src={topResearchers[2].avatar} alt={topResearchers[2].name} />
                    <AvatarFallback className="text-lg bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200">RS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2">
                    <Award className="h-8 w-8 text-amber-600 fill-amber-500" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{topResearchers[2].name}</h3>
                <p className="text-sm text-muted-foreground mb-3">@{topResearchers[2].username}</p>
                <div className="space-y-1">
                  <div className="text-xl font-bold text-amber-700 dark:text-amber-500">{topResearchers[2].totalBounty}</div>
                  <div className="text-sm text-muted-foreground">{topResearchers[2].bugsFound} bugs found</div>
                  <div className="text-xs text-muted-foreground">⭐ {topResearchers[2].rating} rating</div>
                </div>
              </div>
              <Badge variant="outline" className="text-sm px-4 py-2 border-amber-300 text-amber-700 dark:border-amber-600 dark:text-amber-400">
                <Award className="h-4 w-4 mr-2" />
                3rd Place
              </Badge>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Top 100 Researchers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topResearchers.map((researcher) => (
                <div 
                  key={researcher.rank} 
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => handleResearcherClick(researcher)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(researcher.rank)}
                    </div>
                    
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={researcher.avatar} alt={researcher.name} />
                      <AvatarFallback>
                        {researcher.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-semibold">{researcher.name}</h3>
                      <p className="text-sm text-muted-foreground">@{researcher.username}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{researcher.speciality}</Badge>
                        <span className="text-xs text-muted-foreground">{researcher.country}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-lg text-accent">{researcher.totalBounty}</div>
                    <div className="text-sm text-muted-foreground">{researcher.bugsFound} bugs found</div>
                    <div className="text-sm text-muted-foreground">Rep: {researcher.reputation}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
      
      {/* Dialogs */}
      <ResearcherProfileDialog
        open={showProfile}
        onOpenChange={setShowProfile}
        researcher={selectedResearcher}
        onMessageClick={handleMessageClick}
      />
      
      <ResearcherMessageDialog
        open={showMessage}
        onOpenChange={setShowMessage}
        researcher={selectedResearcher}
      />
    </div>
  );
};

export default Leaderboard;