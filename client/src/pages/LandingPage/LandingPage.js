import NavbarComponent from "../../components/Navbar/NavbarComponent";
import PastYearbooks from "./PastYearbooks";
import Hero from "./Hero.js";

const LandingPage = () => {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <PastYearbooks />
      <div>Landing Page</div>
    </>
  );
};

export default LandingPage;
