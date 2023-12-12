import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => (
  <div>
    <h1>401 - Unauthorized!</h1>
    <Link to="/">Faça login para continuar</Link>
  </div>
);

export default Unauthorized;
