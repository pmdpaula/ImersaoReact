import React from 'react';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <div style={{ color: 'var(--primary)' }}>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>

    </div>
  );
}

export default CadastroVideo;
