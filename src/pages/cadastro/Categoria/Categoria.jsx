import React from 'react';
import { Link } from 'react-router-dom';


const CadastroCategoria = () => {
  return (
    <div style={{color: "var(--primary)"}}>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/cadastro/video" >
        Cadastro de Vídeo
      </Link>

    </div>
  )
}

export default CadastroCategoria;