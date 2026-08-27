import { BookOpen, GraduationCap, Mail, AlertCircle } from "lucide-react";

const CoursesContent = () => (
  <div className="max-w-2xl mx-auto text-center space-y-16">
    <div>
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
  </div>
);

export default CoursesContent;