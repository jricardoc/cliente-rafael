import { Suspense, lazy } from "react";
import "./index.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { About } from "./components/About/About";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { Pricing } from "./components/Pricing/Pricing";
import { Footer } from "./components/Footer/Footer";

// Lazy load Results component (heavy dependency: Swiper)
const Results = lazy(() =>
  import("./components/Results/Results").then((module) => ({
    default: module.Results,
  }))
);

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Suspense fallback={<div style={{ minHeight: "600px" }}></div>}>
          <Results />
        </Suspense>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
