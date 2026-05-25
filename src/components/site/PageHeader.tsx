import { ReactNode } from "react";
import SiteLayout from "@/components/site/SiteLayout";

export const PageHeader = ({
  eyebrow,
  title,
  description,
  accent = "blue",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "blue" | "green" | "yellow" | "red" | "orange" | "pink";
}) => (
  <section className="container pt-16 pb-10 md:pt-24 md:pb-14">
    <div className={`text-xs mono uppercase tracking-widest text-uais-${accent}`}>{eyebrow}</div>
    <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold leading-[0.95]">{title}</h1>
    {description && <p className="mt-6 text-muted-foreground text-lg max-w-2xl">{description}</p>}
    <div className="mt-10 divider-multi" />
  </section>
);

export const SimplePage = ({
  eyebrow,
  title,
  description,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "blue" | "green" | "yellow" | "red" | "orange" | "pink";
  children: ReactNode;
}) => (
  <SiteLayout>
    <PageHeader eyebrow={eyebrow} title={title} description={description} accent={accent} />
    <section className="container pb-24">{children}</section>
  </SiteLayout>
);
