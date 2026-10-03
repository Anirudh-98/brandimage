import { PageShell, CtaBand } from "@/components/PageKit";

export default function NotFound() {
  return (
    <PageShell
      eyebrow="Page not found"
      title="We couldn't find that page"
      intro="The link may be out of date, or the page may have moved. The menu above reaches every section of the site."
    >
      <CtaBand
        title="Start again from the home page"
        text="Products, experts, services, training and member privileges are all one click from there."
        href="/"
        label="Go to Home"
      />
    </PageShell>
  );
}
