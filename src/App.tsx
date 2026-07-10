import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Gallery } from "./components/Gallery";
import { Team } from "./components/Team";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-brass focus:text-ink focus:px-4 focus:py-2 focus:rounded-sm"
      >
        Pular para o conteúdo
      </a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Services />
        <Pricing />
        <Gallery />
        <Team />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
