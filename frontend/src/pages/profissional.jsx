import React from 'react';
import './profissional.css';

export default function Profissional() {
  return (
    <div>
    <div className='areapes'>
      <input className = "pesquisa" type="text" placeholder='Pesquisar' onChange={handleChange}  />
      <p><Strong>Pesquise</Strong><br />O nome do paciente ou estagiario para ver os detalhes </p>
    </div>
       <div className='mostrar estagio'></div>
       <div className='mostrar paciente'></div>
       <div className='mostrar consultas'></div>
    </div>

    
  );
}