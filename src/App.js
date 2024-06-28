import decoHeader from "./img/deco-header.svg";
import underlineHeader from "./img/underline-header.svg";
import "./App.css";
import StoreItem from "./components/StoreItem";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;

function App() {
  let btns = document.querySelectorAll(".store-button");
  let cartItems = new Set();

  useEffect(() => {
    tg.expand();
    tg.MainButton.hide();
    tg.ready();
  }, []);

  const OnClose = () => {
    tg.Close();
  };

  const OnToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  for (let btn of btns) {
    btn.onclick = () => {
      let name = btn.getAttribute("data-name");
      let img = btn.querySelector("img");
      OnToggleButton();
      if (cartItems.has(name)) {
        cartItems.delete(name);
        btn.style.background = "none";
        img.style.transform = "rotate(1turn)";
      } else {
        cartItems.add(name);
        btn.style.background = "#D9D9D9";
        img.style.transform = "rotate(-1turn)";
      }
      console.log(cartItems);
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>WALKN</h1>
        <p>от англ. walking - гуляющий</p>
      </header>
      <main>
        <div class={"menu"}>
          <button href={"#"} class={"menu-button"}>
            ОБУВЬ
          </button>
          <button href={"#"} class={"menu-button"}>
            ОДЕЖДА
          </button>
          <button href={"#"} class={"menu-button"}>
            О НАС
          </button>
        </div>

        <div class={"store"}>
          <StoreItem
            info={{ Price: 5500, Name: "крутой ботинок1" }}
          ></StoreItem>
          <StoreItem
            info={{ Price: 5500, Name: "крутой ботинок2" }}
          ></StoreItem>
          <StoreItem
            info={{ Price: 5500, Name: "крутой ботинок3" }}
          ></StoreItem>
          <StoreItem
            info={{ Price: 5500, Name: "крутой ботинок4" }}
          ></StoreItem>
          <StoreItem
            info={{ Price: 5500, Name: "крутой ботинок5" }}
          ></StoreItem>
          <StoreItem
            info={{ Price: 5500, Name: "крутой ботинок6" }}
          ></StoreItem>
          <StoreItem
            info={{ Price: 5500, Name: "крутой ботинок7" }}
          ></StoreItem>
        </div>
      </main>
    </div>
  );
}

export default App;
