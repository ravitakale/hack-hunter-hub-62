import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Eye, EyeOff, Mail, Lock, User, Github, Chrome, Upload, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const OrganizationSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    organizationName: "",
    website: "",
    industry: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactPerson: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Demo registration for organizations
    setTimeout(() => {
      // Store user data in localStorage for demo
      const userData = {
        email: formData.email,
        type: "organization",
        name: formData.organizationName,
        contactPerson: formData.contactPerson,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem("bugkabaap_user", JSON.stringify(userData));
      
      toast({
        title: "Registration Successful!",
        description: "Organization account created successfully.",
      });
      navigate("/org-dashboard");
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialAuth = (provider: string) => {
    toast({
      title: "Social Registration",
      description: `${provider} registration for organizations coming soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Building2 className="h-12 w-12 text-primary" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">Register Organization</h1>
              <p className="text-muted-foreground">
                Create your organization account
              </p>
            </div>

            {/* Sign Up Form */}
            <Card>
              <CardHeader>
                <CardTitle>Organization Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Social Authentication */}
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleSocialAuth("Google")}
                  >
                    <Chrome className="h-4 w-4 mr-2" />
                    Continue with Google
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleSocialAuth("GitHub")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Continue with GitHub
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or register with email
                    </span>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Logo Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="logo">Organization Logo</Label>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Input
                          id="logo"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setLogoFile(file);
                          }}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('logo')?.click()}
                          className="w-full"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {logoFile ? logoFile.name : "Upload Logo"}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization Name</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="organizationName"
                        type="text"
                        placeholder="Enter organization name"
                        value={formData.organizationName}
                        onChange={(e) => handleInputChange("organizationName", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://company.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Organization Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="org@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Organization Account"}
                  </Button>
                </form>

                {/* Sign In Link */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link 
                      to="/organization/signin" 
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>

                {/* Switch to Researcher */}
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Are you a researcher?{" "}
                    <Link 
                      to="/researcher/signup" 
                      className="text-primary hover:underline font-medium"
                    >
                      Researcher Registration
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrganizationSignUp;