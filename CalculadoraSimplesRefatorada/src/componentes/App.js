import React, { useState, useEffect } from "react";
import "./AppStyle.scss";


const calcular = () => {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  return (document.getElementById("resultado").innerHTML = num1 + num2);
};

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.getElementById("resultado").innerHTML = count;
  });

  return (
    <div class="conteiner">
      <h1 className="calculadora">{process.env.REACT_APP_SITE_TITLE}</h1>
      <input
        type="number"
        class="form-control"
        className="numbEsquerdo"
        id="num1"
      />
      <input
        type="number"
        class="form-control"
        className="numbDireito"
        id="num2"
      />
      <button class="btn" onClick={() => setCount(calcular)}>
        +
      </button>
      <h2 id="resultado"></h2>
    </div>
  );
};

export default App;
