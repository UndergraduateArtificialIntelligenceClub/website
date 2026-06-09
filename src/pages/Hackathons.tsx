import { Link } from "react-router-dom";
import { SimplePage } from "@/components/site/PageHeader";
import { hackathons, COLORS } from "@/data/uais";
import PosterTile from "@/components/site/PosterTile";
import { Calendar, MapPin } from "lucide-react";

const Hackathons = () => (
  <SimplePage
    eyebrow="Build weekends"
    title="Hackathons."
    description="Caffeine. Compute. Community. Our hackathons are where ideas turn into demos."
    accent="orange"
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hackathons.map((h, i) => {
        const color = COLORS[i % COLORS.length];
        const isUpcoming = h.status === "Upcoming";
        return (
          <Link
            key={h.slug}
            to={`/hackathons/${h.slug}`}
            className="card-surface overflow-hidden flex flex-col group hover:border-foreground/30 transition"
          >
            <div className="relative aspect-[4/5]">
              {h.banner ? (
                <img src={h.banner} alt={h.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              ) : (
                <PosterTile color={color} label={h.name} className="absolute inset-0" />
              )}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-card via-card/80 to-transparent" />
              <span
                className={`absolute top-3 right-3 text-xs mono uppercase tracking-widest px-2.5 py-1 rounded-full ${
                  isUpcoming
                    ? "bg-uais-green/15 text-uais-green"
                    : "bg-background/70 text-muted-foreground backdrop-blur"
                }`}
                style={isUpcoming ? { boxShadow: "0 0 20px hsl(var(--uais-green) / 0.4)" } : undefined}
              >
                {h.status}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl font-bold leading-tight group-hover:text-foreground">
                  {h.name}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{h.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{h.location}</span>
                </div>
                <p className="mt-2 italic text-sm text-muted-foreground line-clamp-2">"{h.tagline}"</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </SimplePage>
);

export default Hackathons;
