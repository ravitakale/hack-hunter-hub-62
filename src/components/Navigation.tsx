import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Shield, Bug, User, Settings, LogOut } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: Replace with actual auth state
  const isLoggedIn = false; // This should come from your auth context/state
  const userInitials = "JD"; // This should come from user data
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/programs", label: "Programs" },
    { href: "/courses", label: "Courses" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/payments", label: "Payments" },
    { href: "/activity", label: "Activity" },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 mr-8">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <Bug className="h-4 w-4 text-accent absolute -bottom-1 -right-1" />
            </div>
            <span className="text-xl font-bold">Bug Ka Baap</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center space-x-6">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth/Profile Section */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/researcher/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/researcher/signup">
                <Button variant="hero">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {publicLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  {isLoggedIn ? (
                    <>
                      <Link to="/profile" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Button>
                      </Link>
                      <Link to="/settings" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Button>
                      </Link>
                      <Button variant="ghost" className="w-full justify-start text-red-600">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/researcher/signin" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full">Sign In</Button>
                      </Link>
                      <Link to="/researcher/signup" onClick={() => setIsOpen(false)}>
                        <Button variant="hero" className="w-full">Get Started</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;