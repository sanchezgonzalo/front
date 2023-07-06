
import './App.css';

import Header from "./compo/layout/Header";
import Hero from "./compo/layout/Hero";
import Section from "./compo/layout/Section";
import Programas from "./compo/layout/Programas";
import Carac from "./compo/layout/Carac";
import Contact from "./compo/layout/Contact";
import Tuweb from "./compo/layout/Tuweb";
import Footer from "./compo/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Section></Section>
      <Programas></Programas>
      <Carac></Carac>n
      <Contact></Contact>
      <Tuweb></Tuweb>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
