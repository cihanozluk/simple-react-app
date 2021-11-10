import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const [pagecolor, setPagecolor] = useState("");

  const ChangePageColor = () => {
    var bodyElt = document.querySelector("body");
    if (counter === 10) {
      setPagecolor("yellow");
      bodyElt.style.backgroundColor = pagecolor;
    } else {
      setPagecolor("white");
      bodyElt.style.backgroundColor = pagecolor;
    }
  };

  useEffect(() => {
    ChangePageColor();
  }, [counter, pagecolor]);
  return <Counter counter={counter} setCounter={setCounter}></Counter>;
}

export default App;
