import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import { interviews } from "@/data/uais";
import InitialsAvatar from "@/components/site/Avatar";
import { ArrowLeft } from "lucide-react";

const InterviewDetail = () => {
  const { slug } = useParams();
  const i = interviews.find((x) => x.slug === slug);
  
  if (!i) {
    return (
      <SiteLayout>
        <div className="container py-24">
          <p className="text-muted-foreground">Interview not found.</p>
          <Link to="/interviews" className="text-uais-blue mt-4 inline-block">← All interviews</Link>
        </div>
      </SiteLayout>
    );
  }

  // Simple transcript parser
  const blocks = i.fullContent
    .split(/\n\n+/)
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("### ")) {
        return { type: "prompt", content: trimmed.replace(/^###\s+/, "") };
      }
      if (trimmed.startsWith("> ")) {
        // Remove the blockquote marker from each line and join
        const content = trimmed
          .split("\n")
          .map((line) => line.replace(/^>\s*/, ""))
          .join("\n")
          .trim();
        return { type: "response", content };
      }
      return { type: "text", content: trimmed };
    })
    .filter((b) => b.content);

  return (
    <SiteLayout>
      <section className="container pt-12 md:pt-16">
        <Link to="/interviews" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All interviews
        </Link>
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <InitialsAvatar name={i.name} color={i.color} size={120} />
          <div>
            <div className="text-xs mono uppercase tracking-widest" style={{ color: `hsl(var(--uais-${i.color}))` }}>
              Interview
            </div>
            <h1 className="mt-2 font-display text-4xl md:text-6xl font-bold leading-[0.95]">{i.name}</h1>
            <div className="mt-2 text-lg text-muted-foreground">{i.title}</div>
          </div>
        </div>
        <p className="mt-8 text-lg text-muted-foreground max-w-3xl italic">"{i.teaser}"</p>
        
        <div className="mt-8 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            {i.bio}
          </p>
        </div>

        {i.pdf && (
          <a 
            href={i.pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
            style={{ 
              backgroundColor: `hsl(var(--uais-${i.color}))`,
              color: 'white'
            }}
          >
            Download Full Interview (PDF)
          </a>
        )}

        <div className="mt-10 divider-multi" />
      </section>

      <section className="container py-16 max-w-3xl mx-auto">
        <div className="space-y-12">
          {blocks.map((block, idx) => {
            if (block.type === "prompt") {
              return (
                <div key={idx} className="relative pl-6">
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full opacity-50"
                    style={{ backgroundColor: `hsl(var(--uais-${i.color}))` }}
                  />
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {block.content}
                  </h3>
                </div>
              );
            }
            
            // For responses, try to bold the name if it follows the "Name:" pattern
            const parts = block.content.split(/(: )/);
            const hasName = parts.length > 1 && parts[0].length < 30; // Heuristic for name prefix

            const renderInline = (text: string) => {
              const subparts = text.split(/(\*\*.*?\*\*)/g);
              return subparts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={i} className="font-bold text-foreground">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return part;
              });
            };

            return (
              <div key={idx} className="space-y-4">
                {block.content.split("\n").map((para, pIdx) => (
                  <p key={pIdx} className="text-lg text-muted-foreground leading-relaxed">
                    {pIdx === 0 && hasName ? (
                      <>
                        <span className="font-bold text-foreground">{parts[0]}</span>
                        {parts[1]}
                        {renderInline(block.content.substring(parts[0].length + parts[1].length).split("\n")[0])}
                      </>
                    ) : (
                      renderInline(para)
                    )}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center border-t border-border pt-16">
          <Link to="/interviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to all interviews
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default InterviewDetail;
