import React from "react";
import { Link } from "react-router-dom";

const Forbidden = () => (
  <div>
    <h1>403 - Forbidden!</h1>
    <Link to="/">Troque o usuário para continuar</Link>
  </div>
);

export default Forbidden;
