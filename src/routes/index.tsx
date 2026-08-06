import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Faisal Media — Digital Marketing & Creative Design Consultant";
const description =
  "Freelance digital marketing and design for retail, restaurants, salons, real estate, education, hospitality and healthcare brands. Strategy, social, ads and video in one place.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
