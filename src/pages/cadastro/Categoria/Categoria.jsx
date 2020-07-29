import React from 'react';
import { Link } from 'react-router-dom';


const CadastroCategoria = () => {
  return (
    <div style={{color: "var(--primary)"}}>
      <h1>Cadastro de Vídeo</h1>
      <form>
        Nome da Categoria: <input type="text" />
        <button>Cadastrar</button>
      </form>

      <Link to="/" >
        Ir para home
      </Link>

    </div>
  )
}

export default CadastroCategoria;