import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState("");

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <div className="App">
      <h1>Input Props</h1>
      <label htmlFor="input">Escreva seu nome: </label>
      <input type="text" id="input" onChange={handleChange} />
      <p>{valor}</p>
    </div>
  );
}

export default App;
