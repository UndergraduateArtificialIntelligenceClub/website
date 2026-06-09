import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import { projects } from "@/data/uais";
import InitialsAvatar from "@/components/site/Avatar";
import { ArrowLeft, Github, ExternalLink, Linkedin, FileText } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) {
    return (
      <SiteLayout>
        <div className="container py-24">
          <p className="text-muted-foreground">Project not found.</p>
          <Link to="/projects" className="text-uais-blue mt-4 inline-block">← All projects</Link>
        </div>
      </SiteLayout>
    );
  }

  // Simple Inline Renderer (Bold and Links)
  const renderInline = (text: string) => {
    // Handle bold
    let parts: (string | JSX.Element)[] = text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={`b-${i}`} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    // Handle inline code (backticks)
    parts = parts.flatMap((part, i) => {
      if (typeof part !== "string") return part;
      const subparts = part.split(/(`.*?`)/g);
      return subparts.map((sub, j) => {
        if (sub.startsWith("`") && sub.endsWith("`")) {
          return <code key={`c-${i}-${j}`} className="px-1.5 py-0.5 rounded bg-secondary mono text-sm text-foreground/90 border border-border/50">{sub.slice(1, -1)}</code>;
        }
        return sub;
      });
    });

    // Handle links
    parts = parts.flatMap((part, i) => {
      if (typeof part !== "string") return part;
      const subparts = part.split(/(\[.*?\]\(.*?\))/g);
      return subparts.map((sub, j) => {
        const match = sub.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a 
              key={`l-${i}-${j}`} 
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-uais-blue hover:underline underline-offset-4"
            >
              {match[1]}
            </a>
          );
        }
        return sub;
      });
    });

    return parts;
  };

  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, idx) => {
      const trimmed = block.trim();
      
      // Handle Horizontal Rules
      if (trimmed === "---") {
        return <div key={idx} className="h-px w-full bg-border/40 my-16" />;
      }

      const lines = trimmed.split("\n");
      return (
        <div key={idx} className="space-y-1">
          {lines.map((line, i) => {
            const lTrim = line.trim();
            
            // Handle Headers
            if (lTrim.startsWith("### ")) {
              return (
                <h3 key={i} className="font-display text-xl font-bold mt-10 mb-4" style={{ color: `hsl(var(--uais-${p.color}))` }}>
                  {lTrim.replace(/^###\s+/, "")}
                </h3>
              );
            }
            if (lTrim.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display text-2xl font-bold mt-14 mb-6 first:mt-0" style={{ color: `hsl(var(--uais-${p.color}))` }}>
                  {lTrim.replace(/^##\s+/, "")}
                </h2>
              );
            }

            // Handle Lists
            if (lTrim.startsWith("* ") || lTrim.startsWith("- ")) {
              return (
                <div key={i} className="flex gap-3 text-lg text-muted-foreground leading-relaxed ml-4 mb-2">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: `hsl(var(--uais-${p.color}))` }} />
                  <span>{renderInline(lTrim.slice(2))}</span>
                </div>
              );
            }

            // Handle Blockquotes
            if (lTrim.startsWith("> ")) {
              return (
                <blockquote key={i} className="border-l-4 pl-6 py-2 my-6 italic text-xl text-foreground/80" style={{ borderColor: `hsl(var(--uais-${p.color}))` }}>
                  {renderInline(lTrim.slice(2))}
                </blockquote>
              );
            }

            // Standard text line
            if (line === "") return null;
            return <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-4">{renderInline(line)}</p>;
          })}
        </div>
      );
    });
  };

  return (
    <SiteLayout>
      <section className="container pt-12 md:pt-16">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <div className="mt-8">
          <div className="text-xs mono uppercase tracking-widest" style={{ color: `hsl(var(--uais-${p.color}))` }}>
            {p.tag}
          </div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold leading-[0.95]">{p.name}</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl">{p.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="px-2.5 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {p.source && (
              <a href={p.source} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition">
                <Github className="h-4 w-4" /> Source Code
              </a>
            )}
            {p.demo && (
              <a href={p.demo} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-border hover:border-foreground/40 transition">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Metrics */}
        {(p.difficulty || p.termLength) && (
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-border/50 py-8">
            {p.difficulty && (
              <div>
                <div className="text-[10px] mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-1.5">Difficulty</div>
                <div className="text-sm font-bold tracking-tight">{p.difficulty}</div>
              </div>
            )}
            {p.termLength && (
              <div>
                <div className="text-[10px] mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-1.5">Term Length</div>
                <div className="text-sm font-bold tracking-tight">{p.termLength}</div>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 divider-multi" />
      </section>

      <section className="container py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-16">
          {/* Main Content Area */}
          {p.content ? (
            <div className="space-y-12">
              {p.content.type === "sections" ? (
                p.content.items?.map((item, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="font-display text-2xl font-bold" style={{ color: `hsl(var(--uais-${p.color}))` }}>
                      {item.title}
                    </h2>
                    <div className="text-lg text-muted-foreground leading-relaxed">
                      {renderContent(item.body)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="space-y-4">
                  {renderContent(p.content.body || "")}
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="font-display text-2xl font-bold" style={{ color: `hsl(var(--uais-${p.color}))` }}>Overview</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{p.details}</p>
            </div>
          )}

          {/* Real Gallery Section */}
          {p.gallery && p.gallery.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">Visual Assets</h2>
                <div className="text-[10px] mono text-muted-foreground uppercase tracking-widest">Case Study Exhibits</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {p.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-3xl border border-border relative overflow-hidden group cursor-pointer shadow-2xl shadow-black/20 bg-secondary/10"
                  >
                    <img 
                      src={img} 
                      alt={`${p.name} exhibit ${i + 1}`}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: `hsl(var(--uais-${p.color}))` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real Reports Section */}
          {p.documents && p.documents.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold">Reports & Docs</h2>
              <div className="mt-4 space-y-2">
                {p.documents.map((doc, i) => (
                  <a 
                    key={i}
                    href={doc.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl card-surface hover:border-foreground/30 transition group"
                  >
                    <FileText className="h-5 w-5" style={{ color: `hsl(var(--uais-${p.color}))` }} />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{doc.title}</div>
                      <div className="text-xs text-muted-foreground">Official technical documentation</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {p.milestones && (
            <div>
              <h2 className="font-display text-2xl font-bold">Milestones</h2>
              <div className="mt-4 space-y-3">
                {p.milestones.map((m) => (
                  <div key={m.date} className="flex gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="w-24 shrink-0 mono text-xs uppercase tracking-widest" style={{ color: `hsl(var(--uais-${p.color}))` }}>
                      {m.date}
                    </div>
                    <div className="text-sm">{m.item}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="card-surface p-6" style={{ borderTop: `3px solid hsl(var(--uais-${p.color}))` }}>
            <div className="text-xs mono uppercase tracking-widest text-muted-foreground">
              {Array.isArray(p.lead) && p.lead.length > 1 ? "Project Leads" : "Project Lead"}
            </div>
            <div className="mt-4 space-y-6">
              {(Array.isArray(p.lead) ? p.lead : [p.lead]).map((l, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-4">
                    <InitialsAvatar name={l.name} color={p.color} size={56} />
                    <div>
                      <div className="font-semibold">{l.name}</div>
                      <div className="text-sm text-muted-foreground">{l.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {l.linkedin && (
                      <a href={l.linkedin} className="p-2 rounded-full border border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground transition" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {l.github && (
                      <a href={l.github} className="p-2 rounded-full border border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground transition" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {p.members && p.members.length > 0 && (
            <div className="card-surface p-6">
              <div className="text-xs mono uppercase tracking-widest text-muted-foreground">Project Members</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {p.members.map((m) => (
                  <div key={m} className="flex items-center gap-2">
                    <InitialsAvatar name={m} color={p.color} size={32} ring={false} />
                    <div className="text-sm">{m}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>
    </SiteLayout>
  );
};

export default ProjectDetail;
