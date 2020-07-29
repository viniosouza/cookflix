import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroVideo() {
  return (
    <div>
      <PageDefault>
        <h1>Página de Cadastro de video</h1>

        <Link to="/cadastro/categoria">Cadastro Categoria</Link>
      </PageDefault>
    </div>
  );
}

export default CadastroVideo;
