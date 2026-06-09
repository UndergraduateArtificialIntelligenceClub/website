import SiteLayout from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Attendance = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="Events"
      title="UAIS Event Attendance"
      description="If you are a registered member, use the email address associated with your membership. Otherwise, any email address works."
      accent="blue"
    />
    <section className="container pb-20">
      <form className="max-w-xl flex flex-col gap-3 sm:flex-row" action="https://api.uais.dev/attendance" method="post">
        <Input type="email" name="email" placeholder="email" required />
        <Button type="submit">Sign In</Button>
      </form>
    </section>
  </SiteLayout>
);

export default Attendance;
