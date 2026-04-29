import React, { useState } from 'react';
import './profissional.css';

export default function Profissional() {
  const [pesquisa, setPesquisa] = useState('');

  // Função que atualiza o estado quando o usuário digita
  const handleChange = (e) => {
    setPesquisa(e.target.value);
    console.log('Pesquisando:', e.target.value);
  };

  return (
    <div className='container'>
      <div className="areapes">
        <input
          className="pesquisa"
          type="text"
          placeholder="Pesquisar"
          value={pesquisa}
          onChange={handleChange}
        />
        <p>
          <strong>Pesquise</strong><br />
          O nome do paciente ou estagiário para ver os detalhes
        </p>
      </div>

      <div className="mostrar estagio"><p>Estagiario</p><br /><div></div></div>
      <div className="mostrar paciente"><p>paciente</p><br /><div> </div></div>
      <div className="mostrar consultas"><p>consultas</p><br /><div></div></div>
    </div>
  );
}
