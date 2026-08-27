import { useEffect, useRef, useState, useMemo, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import { MilestoneNode } from "./MilestoneNode";
import { MilestoneCard } from "./MilestoneCard";
import { DecorativeElements } from "./DecorativeElements";
import { roadmapData } from "@/data/roadmap";
import {
  desktopRoadPath,
  desktopMilestonePositions,
  mobileRoadPath,
  mobileMilestonePositions,
  desktopRoadWidth,
  desktopRoadHeight,
  mobileRoadWidth,
  mobileRoadHeight,
} from "@/data/roadmapPaths";

export const Roadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const roadPathRef = useRef<SVGPathElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [visibleMilestones, setVisibleMilestones] = useState<Set<number>>(new Set());
  const [roadProgress, setRoadProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [milestoneNodes, setMilestoneNodes] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useLayoutEffect(() => {
    if (!roadPathRef.current) return;
    const length = roadPathRef.current.getTotalLength();
    const milestonePositions = isMobile ? mobileMilestonePositions : desktopMilestonePositions;
    const nodes = milestonePositions.map((pos) => {
      const point = roadPathRef.current!.getPointAtLength(length * pos.progress);
      return { x: point.x, y: point.y };
    });
    setMilestoneNodes(nodes);
  }, [isMobile]);

  useEffect(() => {
    if (!mounted) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisibleMilestones(new Set(roadmapData.map((_, i) => i)));
      setRoadProgress(roadmapData.length);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index || "0", 10);
            setVisibleMilestones((prev) => new Set(prev).add(index));
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px", threshold: 0.1 }
    );

    const roadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && roadPathRef.current) {
            const rect = entry.target.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            if (containerRect) {
              const progress = Math.min(
                1,
                Math.max(0, (containerRect.bottom - rect.top) / containerRect.height)
              );
              setRoadProgress(Math.round(progress * roadmapData.length));
            }
          }
        });
      },
      { rootMargin: "0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    const milestoneElements = container.querySelectorAll("[data-milestone]");
    milestoneElements.forEach((el) => observer.observe(el));
    roadObserver.observe(container);

    return () => {
      milestoneElements.forEach((el) => observer.unobserve(el));
      roadObserver.unobserve(container);
    };
  }, [mounted]);

  useEffect(() => {
    if (!roadPathRef.current) return;
    const length = roadPathRef.current.getTotalLength();
    const progress = Math.min(1, roadProgress / roadmapData.length);
    roadPathRef.current.style.strokeDashoffset = `${length * (1 - progress)}`;
  }, [roadProgress]);

  const milestonePositions = isMobile ? mobileMilestonePositions : desktopMilestonePositions;
  const roadPath = isMobile ? mobileRoadPath : desktopRoadPath;
  const roadWidth = isMobile ? mobileRoadWidth : desktopRoadWidth;
  const roadHeight = isMobile ? mobileRoadHeight : desktopRoadHeight;

  const handleNodeClick = (index: number) => {
    setActiveIndex(index);
    const cardEl = containerRef.current?.querySelector(`[data-card-index="${index}"]`);
    cardEl?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const wrapperAspectRatio = `${roadWidth} / ${roadHeight}`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full",
        "bg-gradient-to-b from-background via-background to-muted/30",
        "rounded-3xl border border-border/50",
        "p-8 md:p-12 lg:p-16",
        "overflow-hidden"
      )}
      style={{
        minHeight: isMobile ? "auto" : "600px",
      }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl" aria-hidden="true">
        <svg viewBox={`0 0 ${roadWidth} ${roadHeight}`} preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <DecorativeElements width={roadWidth} height={roadHeight} isMobile={isMobile} />
        </svg>
      </div>

      <div className="relative z-10 w-full" style={{ position: "relative", width: "100%" }}>
        <div
          className="relative w-full"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: wrapperAspectRatio,
          }}
        >
          <svg
            viewBox={`0 0 ${roadWidth} ${roadHeight}`}
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--uais-blue))" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(var(--uais-green))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--uais-orange))" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            <path
              d={roadPath}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: "drop-shadow(0 2px 8px hsl(var(--foreground) / 0.08))",
              }}
            />

            <path
              ref={roadPathRef}
              d={roadPath}
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={3000}
              strokeDashoffset={3000}
              style={{
                transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                filter: "drop-shadow(0 0 6px hsl(var(--uais-blue) / 0.4))",
              }}
            />

            <path
              d={roadPath}
              fill="none"
              stroke="hsl(var(--foreground) / 0.15)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="12 16"
              style={{
                filter: "drop-shadow(0 0 2px hsl(var(--foreground) / 0.1))",
              }}
            />

            {milestoneNodes.map((pos, i) => {
              const milestone = roadmapData[i];
              const positionData = milestonePositions[i];
              return (
                <MilestoneNode
                  key={milestone.id}
                  x={pos.x}
                  y={pos.y}
                  color={milestone.color}
                  icon={<milestone.icon className="h-5 w-5" />}
                  isActive={activeIndex === i}
                  isCompleted={activeIndex > i}
                  onClick={() => handleNodeClick(i)}
                  index={i}
                />
              );
            })}
          </svg>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {roadmapData.map((milestone, i) => {
              const pos = milestoneNodes[i] || { x: 0, y: 0 };
              const positionData = milestonePositions[i];
              return (
                <MilestoneCard
                  key={milestone.id}
                  milestone={milestone}
                  position={pos}
                  side={positionData.side}
                  isActive={activeIndex === i}
                  isVisible={visibleMilestones.has(i)}
                  index={i}
                  viewBoxWidth={roadWidth}
                  viewBoxHeight={roadHeight}
                  isMobile={isMobile}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};