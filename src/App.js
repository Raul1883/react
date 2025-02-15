import decoHeader from "./img/deco-header.svg";
import underlineHeader from "./img/underline-header.svg";
import "./App.css";
import StoreItem from "./components/StoreItem";
import { useEffect, useState } from "react";
const tg = window.Telegram.WebApp;

function App() {
  const [addedItems, setAddedItems] = useState([]);

  const onSendData = () => {
    tg.sendData(getData(addedItems));
  };

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  const call = (info) => {
    let already = addedItems.find((item) => item.Name === info.Name);

    let newItems = [];
    if (already) {
      newItems = addedItems.filter((x) => x.Name !== info.Name);
    } else {
      newItems = [...addedItems, info];
    }
    setAddedItems(newItems);
  };

  const items = [
    { Price: 5500, Name: "крутой ботинок1", Call: call },
    { Price: 5500, Name: "крутой ботинок2", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    { Price: 5500, Name: "крутой ботинок3", Call: call },
    
  ];

  const updatePrice = (arr) => {
    let sum = sumOf(addedItems);
    if (sum > 0) {
      tg.MainButton.show();
      tg.MainButton.setText("К оформлению на сумму:" + sum.toString() + "р.");
    } else {
      tg.MainButton.hide();
    }

    return sum;
  };

  const sumOf = (arr) => {
    let s = 0;
    for (let i of arr) {
      s += i.Price;
    }
    return s;
  };

  const getData = (arr) => {
    let str = "";
    for (let item of arr) {
      str += item.Name + ":" + item.Price + ";";
    }
    return str;
  };

  return (
    <div className="App">
      <h1>Заголовок</h1>
      <main>
        <div className={"store"}>
          {items.map((item) => (
            <StoreItem info={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
