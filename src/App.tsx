import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Team from "./pages/Team.tsx";
import Presentations from "./pages/Presentations.tsx";
import Hackathons from "./pages/Hackathons.tsx";
import HackathonDetail from "./pages/HackathonDetail.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Interviews from "./pages/Interviews.tsx";
import InterviewDetail from "./pages/InterviewDetail.tsx";
import Sponsors from "./pages/Sponsors.tsx";
import GettingStarted from "./pages/GettingStarted.tsx";
import Socials from "./pages/Socials.tsx";
import Attendance from "./pages/Attendance.tsx";
import ExternalRedirect from "./pages/ExternalRedirect.tsx";
import NotFound from "./pages/NotFound.tsx";

import ScrollToTop from "./components/site/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/hackathons/:slug" element={<HackathonDetail />} />
          <Route path="/hackathons/sillycon-valley" element={<Navigate to="/hackathons/sillycon-valley-2026" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/interviews/:slug" element={<InterviewDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/discord" element={<ExternalRedirect to="https://discord.gg/KapmJxs" />} />
          <Route path="/github" element={<ExternalRedirect to="https://github.com/UndergraduateArtificialIntelligenceClub/" />} />
          <Route path="/instagram" element={<ExternalRedirect to="https://www.instagram.com/uais.ualberta/" />} />
          <Route path="/linkedin" element={<ExternalRedirect to="https://www.linkedin.com/company/undergraduate-artificial-intelligence-society/" />} />
          <Route path="/eventbrite" element={<ExternalRedirect to="https://uais.eventbrite.com/" />} />
          <Route path="/rubric" element={<ExternalRedirect to="https://campus.hellorubric.com/?s=11851" />} />
          <Route path="/redirect" element={<ExternalRedirect to="https://www.eventbrite.ca/e/weights-biases-webinar-competition-tickets-510165477677" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
