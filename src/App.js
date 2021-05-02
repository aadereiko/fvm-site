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

function App() {
  return (
    <div className="App">
      <div className="content">
        <header>
          <h3>ФОТОВЕЛОМАРАФОН</h3>
          <ul>
            <li>
              <a href="#about">О ПРОЕКТЕ</a>
            </li>
            <li>
              <a href="#seasons">СЕЗОНЫ</a>
            </li>
            <li>
              <a href="#merch">МЕРЧ</a>
            </li>
            <li>
              <a href="#contacts">ГДЕ НАС ИСКАТЬ</a>
            </li>
          </ul>
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
        <TakePart />
        <Footer />
      </div>
    </div>
  );
}

export default App;
