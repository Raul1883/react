import decoHeader from "./img/deco-header.svg";
import underlineHeader from "./img/underline-header.svg";
import "./App.css";
import StoreItem from "./components/StoreItem";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          WALKN
        </h1>
        <p>от англ. walking - гуляющий</p>
      </header>
      <main>
      <div class={"menu"}>
        <button href={"#"}>ОБУВЬ</button>
        <button href={"#"}>ОДЕЖДА</button>
        <button href={"#"}>О НАС</button>
      </div>

      <div class={"store"}>
        <StoreItem info={{ Price: 5500, Name: "крутой ботинок" }}></StoreItem>
        <StoreItem info={{ Price: 5500, Name: "крутой ботинок" }}></StoreItem>
        <StoreItem info={{ Price: 5500, Name: "крутой ботинок" }}></StoreItem>
        <StoreItem info={{ Price: 5500, Name: "крутой ботинок" }}></StoreItem>
        <StoreItem info={{ Price: 5500, Name: "крутой ботинок" }}></StoreItem>
        <StoreItem info={{ Price: 5500, Name: "крутой ботинок" }}></StoreItem>
        <StoreItem info={{ Price: 5500, Name: "крутой ботинок" }}></StoreItem>
      </div>
      </main>
    </div>
  );
}

export default App;
