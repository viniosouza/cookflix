import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Main from "./styles";

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}
export default PageDefault;
