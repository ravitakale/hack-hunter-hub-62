import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, Bug } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    { href: "/settings", label: "Settings" },
    { href: "/about", label: "About" },
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

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/researcher/signin">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to="/researcher/signup">
            <Button variant="hero">Get Started</Button>
          </Link>
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
                  <Link to="/researcher/signin" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/researcher/signup" onClick={() => setIsOpen(false)}>
                    <Button variant="hero" className="w-full">Get Started</Button>
                  </Link>
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