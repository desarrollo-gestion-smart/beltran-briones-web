import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import WhyInvest from "@/components/WhyInvest";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <WhyInvest />
        <Press />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
