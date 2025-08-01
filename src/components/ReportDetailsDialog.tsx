import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Eye,
  Calendar,
  DollarSign,
  User,
  Tag,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  ExternalLink,
} from "lucide-react";

interface Report {
  id: number;
  title: string;
  researcher: string;
  severity: string;
  status: string;
  program: string;
  submittedAt: string;
  reward: number;
  description: string;
}

interface ReportDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  report: Report | null;
}

export function ReportDetailsDialog({ open, onOpenChange, report }: ReportDetailsDialogProps) {
  if (!report) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'destructive';
      case 'high': return 'high';
      case 'medium': return 'medium';
      case 'low': return 'low';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'triaged': return <Eye className="h-4 w-4 text-blue-500" />;
      case 'in progress': return <Clock className="h-4 w-4 text-orange-500" />;
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'duplicate': return <XCircle className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Mock detailed vulnerability information
  const vulnerabilityDetails = {
    steps: [
      "Navigate to the login page at /login",
      "Enter the following payload in the username field: admin' OR '1'='1' --",
      "Enter any password",
      "Click the login button",
      "Observe successful authentication bypass"
    ],
    impact: "An attacker can bypass authentication and gain unauthorized access to user accounts, potentially leading to data breaches and system compromise.",
    recommendation: "Implement parameterized queries or prepared statements to prevent SQL injection attacks. Additionally, add input validation and sanitization.",
    cve: "CVE-2024-XXXX",
    cvss: "9.8",
    affected_versions: "v1.0.0 - v2.3.1",
    technical_details: "The vulnerability exists in the authentication module where user input is directly concatenated into SQL queries without proper sanitization or parameterization."
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Shield className="h-6 w-6" />
            {report.title}
          </DialogTitle>
          <DialogDescription>
            Detailed vulnerability report and analysis
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1">
          <div className="space-y-6 pr-4">
            {/* Status and Severity Header */}
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(report.status)}
                  <span className="font-medium">{report.status}</span>
                </div>
                <Badge variant={getSeverityColor(report.severity) as any} className="text-sm">
                  {report.severity}
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">CVSS {vulnerabilityDetails.cvss}</div>
                <div className="text-xs text-muted-foreground">Severity Score</div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Researcher:</span>
                  <span className="font-medium">{report.researcher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Program:</span>
                  <span className="font-medium">{report.program}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Submitted:</span>
                  <span className="font-medium">{formatDate(report.submittedAt)}</span>
                </div>
              </div>
              <div className="space-y-4">
                {report.reward > 0 && (
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Reward:</span>
                    <span className="font-bold text-primary">${report.reward}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">CVE:</span>
                  <span className="font-medium">{vulnerabilityDetails.cve}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Affected Versions:</span>
                  <span className="font-medium">{vulnerabilityDetails.affected_versions}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{report.description}</p>
            </div>

            <Separator />

            {/* Technical Details */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Technical Details</h3>
              <p className="text-muted-foreground leading-relaxed">{vulnerabilityDetails.technical_details}</p>
            </div>

            <Separator />

            {/* Steps to Reproduce */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Steps to Reproduce</h3>
              <ol className="space-y-2">
                {vulnerabilityDetails.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <Separator />

            {/* Impact */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Impact</h3>
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-destructive-foreground">{vulnerabilityDetails.impact}</p>
              </div>
            </div>

            <Separator />

            {/* Recommendation */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Recommendation</h3>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-primary-foreground">{vulnerabilityDetails.recommendation}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button variant="outline">
                Download Report
              </Button>
              <Button variant="outline">
                Export PDF
              </Button>
              <Button>
                Update Status
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}