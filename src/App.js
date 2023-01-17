import React, { useState } from "react";
import "./app.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [message, setMessage] = useState("");

  function pesoOn(e) {
    setPeso(e.target.value);
  }

  function alturaOn(e) {
    setAltura(e.target.value);
  }

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMessage("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage("Peso ideal! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage(
        "Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2)
      );
    } else if (imc > 34.9) {
      setMessage("Cuidado Obesidade! Seu IMC: " + imc.toFixed(2));
    }

    setAltura("");
    setPeso("");
  }

  return (
    <div className="Container">
      <div className="app">
        <h1>Calculadora IMC</h1>
        <span>Vamos calcular seu imc</span>

        <div className="area-input">
          <input
            type="text"
            placeholder="Peso em (kg) EX:90"
            value={peso}
            onChange={pesoOn}
          />
          <input
            type="text"
            placeholder="Altura em (cm) Ex:100"
            value={altura}
            onChange={alturaOn}
          />

          <button onClick={calcularIMC}>Calcular</button>
        </div>

        <h2> {message} </h2>
      </div>
    </div>
  );
}

export default App;
