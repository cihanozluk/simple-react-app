import React from "react";

const Counter = ({
  counter,
  setCounter,
  IncrementItem = (e) => {
    var currentCount = counter;
    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    setCounter(currentCount);
  },
  DecreaseItem = (e) => {
    var currentCount = counter;
    if (e.shiftKey) {
      currentCount -= 10;
    } else {
      currentCount -= 1;
    }
    setCounter(currentCount);
    console.log(currentCount);
  },
}) => {
  var backgroundStyle = {
    padding: 50,
    backgroundColor: "yellow",
    width: 250,
    height: 200,
    borderRadius: 10,
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };
  var buttonStyle = {
    fontSize: "1em",
    width: 30,
    height: 30,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold",
    lineHeight: "3px",
  };
  var textStyle = {
    fontSize: 72,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold",
  };
  return (
    <div style={backgroundStyle}>
      <h1 style={textStyle} onClick={(e) => {}}>
        {counter}
      </h1>
      <button
        style={buttonStyle}
        onClick={(e) => {
          IncrementItem(e);
        }}
      >
        +
      </button>
      <button
        style={buttonStyle}
        onClick={(e) => {
          DecreaseItem(e);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
