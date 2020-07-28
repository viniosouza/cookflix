import React from "react";
import "./ButtonLink.css";

function ButtonLink({ href, className, children }) {
  return (
    <a href={href} className={className}>
      {children ? children : "Sem nome"}
    </a>
  );
}
export default ButtonLink;
