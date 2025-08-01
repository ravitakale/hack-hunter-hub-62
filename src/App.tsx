import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import SubmitReport from "./pages/SubmitReport";
import Leaderboard from "./pages/Leaderboard";
import Courses from "./pages/Courses";
import Activity from "./pages/Activity";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import Payments from "./pages/Payments";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OrganizationSignIn from "./pages/OrganizationSignIn";
import OrganizationSignUp from "./pages/OrganizationSignUp";
import OrganizationDashboard from "./pages/OrganizationDashboard";
import OrganizationPrograms from "./pages/OrganizationPrograms";
import OrganizationProgramCreate from "./pages/OrganizationProgramCreate";
import OrganizationReports from "./pages/OrganizationReports";
import OrganizationResearchers from "./pages/OrganizationResearchers";
import OrganizationAnalytics from "./pages/OrganizationAnalytics";
import OrganizationSettings from "./pages/OrganizationSettings";
import OrganizationProgramView from "./pages/OrganizationProgramView";
import OrganizationProgramEdit from "./pages/OrganizationProgramEdit";
import OrganizationInviteResearcher from "./pages/OrganizationInviteResearcher";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/submit-report/:id" element={<SubmitReport />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/researcher/signin" element={<SignIn />} />
          <Route path="/researcher/signup" element={<SignUp />} />
          <Route path="/organization/signin" element={<OrganizationSignIn />} />
          <Route path="/organization/signup" element={<OrganizationSignUp />} />
          <Route path="/org-dashboard" element={<OrganizationDashboard />} />
          <Route path="/org-programs" element={<OrganizationPrograms />} />
          <Route path="/org-program/create" element={<OrganizationProgramCreate />} />
          <Route path="/org-program/:id/view" element={<OrganizationProgramView />} />
          <Route path="/org-program/:id/edit" element={<OrganizationProgramEdit />} />
          <Route path="/org-submissions" element={<OrganizationReports />} />
          <Route path="/org-researchers" element={<OrganizationResearchers />} />
          <Route path="/org-analytics" element={<OrganizationAnalytics />} />
          <Route path="/org-invite-researcher" element={<OrganizationInviteResearcher />} />
          <Route path="/org-settings" element={<OrganizationSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
