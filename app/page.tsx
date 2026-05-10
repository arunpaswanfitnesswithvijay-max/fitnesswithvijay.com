import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Transformations />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
