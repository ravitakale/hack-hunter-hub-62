import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { Separator } from "@/components/ui/separator";
import { 
  Plus, 
  Trash2,
  FileText,
  Shield,
  DollarSign,
  Globe,
  Lock
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ScopeItem {
  id: string;
  domain: string;
  description: string;
}

export default function OrganizationProgramCreate() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rules: "",
    rewardMin: "",
    rewardMax: "",
    ndaRequired: false,
    status: "private"
  });
  
  const [scopeItems, setScopeItems] = useState<ScopeItem[]>([
    { id: "1", domain: "", description: "" }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addScopeItem = () => {
    const newItem: ScopeItem = {
      id: Date.now().toString(),
      domain: "",
      description: ""
    };
    setScopeItems(prev => [...prev, newItem]);
  };

  const removeScopeItem = (id: string) => {
    setScopeItems(prev => prev.filter(item => item.id !== id));
  };

  const updateScopeItem = (id: string, field: keyof Omit<ScopeItem, 'id'>, value: string) => {
    setScopeItems(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate program creation
    setTimeout(() => {
      toast({
        title: "Program Created Successfully!",
        description: "Your bug bounty program has been created and is now live.",
      });
      navigate("/org-programs");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold">Create Program</h1>
                <p className="text-muted-foreground">
                  Set up a new bug bounty program for researchers
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>Basic Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Program Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter program title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your program, what researchers should focus on..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={6}
                        required
                      />
                      <p className="text-xs text-muted-foreground">Markdown supported</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Program Status</Label>
                      <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">
                            <div className="flex items-center space-x-2">
                              <Lock className="h-4 w-4" />
                              <span>Private - Invite only</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="public">
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4" />
                              <span>Public - Open to all</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Scope */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <Globe className="h-5 w-5" />
                        <span>Program Scope</span>
                      </CardTitle>
                      <Button type="button" variant="outline" size="sm" onClick={addScopeItem}>
                        <Plus className="h-4 w-4 mr-1" />
                        Add Domain
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {scopeItems.map((item, index) => (
                        <div key={item.id} className="flex items-end space-x-3">
                          <div className="flex-1 space-y-2">
                            <Label htmlFor={`domain-${item.id}`}>
                              {index === 0 ? "Domain/URL" : ""}
                            </Label>
                            <Input
                              id={`domain-${item.id}`}
                              placeholder="https://example.com or *.example.com"
                              value={item.domain}
                              onChange={(e) => updateScopeItem(item.id, "domain", e.target.value)}
                              required
                            />
                          </div>
                          <div className="flex-1 space-y-2">
                            <Label htmlFor={`description-${item.id}`}>
                              {index === 0 ? "Description" : ""}
                            </Label>
                            <Input
                              id={`description-${item.id}`}
                              placeholder="Main application, API endpoints, etc."
                              value={item.description}
                              onChange={(e) => updateScopeItem(item.id, "description", e.target.value)}
                            />
                          </div>
                          {scopeItems.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => removeScopeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Rules & Guidelines */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Rules & Guidelines</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="rules">Program Rules</Label>
                      <Textarea
                        id="rules"
                        placeholder="- Do not perform testing that could impact system availability&#10;- Report vulnerabilities responsibly&#10;- Do not access or modify user data..."
                        value={formData.rules}
                        onChange={(e) => handleInputChange("rules", e.target.value)}
                        rows={8}
                        required
                      />
                      <p className="text-xs text-muted-foreground">Markdown supported</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Rewards */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5" />
                      <span>Reward Range</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="rewardMin">Minimum Reward ($)</Label>
                        <Input
                          id="rewardMin"
                          type="number"
                          placeholder="100"
                          value={formData.rewardMin}
                          onChange={(e) => handleInputChange("rewardMin", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rewardMax">Maximum Reward ($)</Label>
                        <Input
                          id="rewardMax"
                          type="number"
                          placeholder="10000"
                          value={formData.rewardMax}
                          onChange={(e) => handleInputChange("rewardMax", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>NDA Required</Label>
                        <p className="text-sm text-muted-foreground">
                          Require researchers to sign an NDA before participating
                        </p>
                      </div>
                      <Switch
                        checked={formData.ndaRequired}
                        onCheckedChange={(checked) => handleInputChange("ndaRequired", checked)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Submit */}
                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate("/org-programs")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create Program"}
                  </Button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}