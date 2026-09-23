import Button from "@/components/ui/Button";
import PageHero from "./PageHero";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About ZENETERA"
      heading="We build the digital foundations small businesses actually run on"
      flair="digital foundations"
      sub="ZENETERA is a UK Web Services Agency working with small businesses and professional services to design, develop, deploy and automate the online presence that turns visitors into customers without the agency markup or endless retainer fees."
    >
      <Button href="/#contact" size="lg">
        Book a free audit
      </Button>
      <Button href="/services" variant="ghost" size="lg">
        See our services
      </Button>
    </PageHero>
  );
}
