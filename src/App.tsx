import {
  About,
  Hero,
  Navbar,
  Explore,
  Footer,
  GetsStarted,
  World,
  FeedBack,
} from "./components";
import Insights from "./components/Insights";

function App() {
  return (
    <div className="overflow-hidden bg-primary-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetsStarted />
        <div className="gradient-04 z-0" />
        <World />
      </div>

      <div className="relative">
        <Insights />
        <FeedBack />
        <div className="gradient-04 z-0" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
