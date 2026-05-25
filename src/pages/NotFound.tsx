import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";

const NotFound = () => (
  <SiteLayout>
    <section className="container py-32 text-center">
      <div className="text-8xl font-display font-bold text-gradient-multi">404</div>
      <p className="mt-4 text-muted-foreground">This neuron doesn't fire.</p>
      <Link to="/" className="mt-8 inline-block px-6 py-3 rounded-full bg-foreground text-background font-semibold">
        Back home
      </Link>
    </section>
  </SiteLayout>
);

export default NotFound;
