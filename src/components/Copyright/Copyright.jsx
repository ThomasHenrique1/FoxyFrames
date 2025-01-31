import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <footer className="copyright">
      <p>© {new Date().getFullYear()} Foxy Frames. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Copyright;
