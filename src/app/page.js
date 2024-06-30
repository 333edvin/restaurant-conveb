import Header from "./components/Header";
import Hero from "./components/Hero";
import 'tailwindcss/tailwind.css';
import 'flowbite';
import WeOffer from "./containers/WeOffer";
import OurStory from "./containers/OurStory";
import Special from "./containers/Special";
import Menu from "./containers/Menu";
import Testmonials from "./containers/Testmonials";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <main >
      <Hero/>
      <WeOffer/>
      <OurStory/>
      <Special/>
      <Menu/>
      <Testmonials/>
      <Contact/>

    </main>
    <Footer/>
    </>
  );
}
