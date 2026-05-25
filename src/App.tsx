import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/interviews/:slug" element={<InterviewDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
