import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function VideoRegistration() {
  return (
    <>
      <PageDefault>
        <h1>Página de Cadastro de video</h1>

        <Link to="/cadastro/categoria">Cadastro Categoria</Link>
      </PageDefault>
    </>
  );
}

export default VideoRegistration;
