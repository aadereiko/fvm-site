import logo from "./logo.svg";
import "./App.css";
import { TitlePart } from "./TitlePart";
import { WhatIs } from "./components/WhatIs/WhatIs";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { Transportation } from "./components/Transportation/Transportation";
import { Seasons } from "./components/Seasons/Seasons";
import { Merch } from "./components/Merch/Merch";
import { Orgs } from "./components/Orgs/Orgs";
import { Footer } from "./components/Footer/Footer";
import { Button } from "./components/general/Button";
import { TakePart } from "./components/TakePart/TakePart";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FAQ } from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="desktop-header">
          <h3>ФОТОВЕЛОМАРАФОН</h3>
          <ul>
            <li>
              <AnchorLink href="#about">О ПРОЕКТЕ</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#seasons">СЕЗОНЫ</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#merch">МЕРЧ</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#faq">FAQ</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contacts">ГДЕ НАС ИСКАТЬ</AnchorLink>
            </li>
          </ul>
          <Button>
            <span>ЗАРЕГИСТРИРОВАТЬСЯ</span>
          </Button>
        </header>
        <header className="mobile-header">
          <h3>ФОТОВЕЛОМАРАФОН</h3>
          <Button>
            <span>ЗАРЕГИСТРИРОВАТЬСЯ</span>
          </Button>
        </header>
        <TitlePart />
        <WhatIs />
        <HowItWorks />
        <Transportation />
        <Seasons />
        <Merch />
        <Orgs />
        <FAQ />
        <TakePart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
