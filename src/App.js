import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SubSectionOne from "./components/SubSectionOne";
import SecondaryHeading from "./components/SecondaryHeading";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <SubSectionOne />
      <SecondaryHeading />
    </div>
  );
}

export default App;
