import { SimplePage } from "@/components/site/PageHeader";
import { BookOpen, GraduationCap, Mail, AlertCircle } from "lucide-react";

const CoursesPage = () => (
  <SimplePage
    eyebrow="Coming Soon"
    title="UAIS Courses"
    description="We're building structured, project-based courses tailored for UAlberta students. Sign up to be notified when they launch."
    accent="purple"
  >
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ background: "hsl(var(--uais-purple) / 0.15)" }}>
          <BookOpen className="h-10 w-10" style={{ color: "hsl(var(--uais-purple))" }} />
        </div>
        <h2 className="font-display text-3xl font-bold mb-4">Courses in Development</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our team is designing hands-on courses that bridge the gap between theory and real-world AI engineering. 
          Each course will include projects, code reviews, and mentorship from UAIS alumni.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-uais-blue/10" style={{ color: "hsl(var(--uais-blue))" }}>
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold">AI Fundamentals</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Python, ML theory, and your first models — built for CMPUT 261/267 alignment.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-uais-green/10" style={{ color: "hsl(var(--uais-green))" }}>
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold">LLM Engineering</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            RAG, agents, evaluation, and deployment — production-grade LLM applications.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-uais-orange/10" style={{ color: "hsl(var(--uais-orange))" }}>
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold">MLOps & Deployment</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Docker, CI/CD, monitoring, and scaling — take models from notebook to production.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/50 bg-card/50 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-uais-pink/10" style={{ color: "hsl(var(--uais-pink))" }}>
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold">Capstone Studio</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            End-to-end project with mentor guidance — portfolio-ready AI application.
          </p>
        </div>
      </div>

      <div className="p-8 rounded-2xl border border-uais-purple/30 bg-uais-purple/5 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10">
          <AlertCircle className="h-16 w-16" style={{ color: "hsl(var(--uais-purple))" }} />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5" style={{ color: "hsl(var(--uais-purple))" }} />
            <span className="font-medium">Get notified when courses launch</span>
          </div>
          <button
            className="px-6 py-2.5 rounded-full bg-uais-purple text-white font-semibold hover:bg-uais-purple/90 transition-colors"
            disabled
          >
            Notify Me
          </button>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Email capture coming soon — join our <a href="https://discord.gg/KapmJxs" target="_blank" rel="noopener noreferrer" className="underline hover:text-uais-purple">Discord</a> for updates in the meantime.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50">
        <h3 className="font-display text-xl font-bold text-center mb-6">While you wait, explore the Roadmap</h3>
        <div className="flex justify-center">
          <a
            href="/resources/roadmap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 font-semibold hover:bg-secondary transition-colors"
          >
            View Learning Roadmap
            <BookOpen className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </SimplePage>
);

export default CoursesPage;