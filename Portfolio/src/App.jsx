import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { TechStack } from "@/app/components/tech-stack";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
