import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PodcastPlayer from "./PodcastPlayer";

import { SkipToMain } from "./SkipToMain";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SkipToMain />
    <Navbar />
    <main id="main-content" className="flex-1" tabIndex={-1}>
      {children}
    </main>
    <Footer />
    <PodcastPlayer />
  </div>
);

export default SiteLayout;
