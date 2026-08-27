import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Map, GraduationCap } from "lucide-react";
import { SimplePage } from "@/components/site/PageHeader";
import { cn } from "@/lib/utils";
import GettingStartedContent from "./GettingStartedContent";
import CoursesContent from "./CoursesContent";
import RoadmapContent from "./RoadmapContent";

const tabs = [
  { id: "getting-started", label: "Getting Started", icon: BookOpen, href: "/resources/getting-started" },
  { id: "roadmap", label: "Roadmap", icon: Map, href: "/resources/roadmap" },
  { id: "courses", label: "Courses", icon: GraduationCap, href: "/resources/courses" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const ResourcesPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const path = location.pathname;
    if (path.includes("roadmap")) return "roadmap";
    if (path.includes("courses")) return "courses";
    return "getting-started";
  });

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  return (
    <SimplePage
      eyebrow="Resources"
      title="Learn AI with UAIS"
      description="Start your journey, follow the structured roadmap, or explore upcoming courses — all curated for UAlberta students."
      accent="blue"
    >
      {/* Tab Navigation */}
      <nav className="mb-12" aria-label="Resources sections">
        <div className="flex items-center gap-2 p-1 rounded-xl bg-muted/50 border border-border/50 w-fit">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  "relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uais-blue",
                  isActive
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                )}
                aria-selected={isActive}
                role="tab"
              >
                <Icon className={cn("h-4 w-4 transition-transform", isActive && "scale-110")} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Tab Panels */}
      <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
        {activeTab === "getting-started" && <GettingStartedContent />}
        {activeTab === "roadmap" && <RoadmapContent />}
        {activeTab === "courses" && <CoursesContent />}
      </div>
    </SimplePage>
  );
};

export default ResourcesPage;