import React, { useState } from "react";
import "./profisional.css";

function Profisional() {
  const [index, setIndex] = useState(0);
  const [texto, setTexto] = useState("");

  const itens = [
    "Item 1: Informações do primeiro elemento",
    "Item 2: Detalhes do segundo elemento",
    "Item 3: Mais dados do terceiro elemento",
    "Item 4: Último item da lista"
  ];

  const nextItem = () => {
    setIndex((prevIndex) => (prevIndex + 1) % itens.length);
  };

  const prevItem = () => {
    setIndex((prevIndex) => (prevIndex - 1 + itens.length) % itens.length);
  };

  return (
    <div className="container-agnd">
      <div className="item">{itens[index]}</div>

      <div className="botoes">
        <button onClick={prevItem}>Anterior</button>
        <button onClick={nextItem}>Próximo</button>
      </div>

      <div className="texto-area">
        <h3>Escreva suas anotações:</h3>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite aqui..."
          rows="5"
          cols="40"
        />
        <p>Você escreveu: {texto}</p>
      </div>
    </div>
  );
}

export default Profisional;