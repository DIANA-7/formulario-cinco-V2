import Proptypes from "prop-types";
import "./Boton.css";


export const Boton = ({ label, next1, size }) => {
  
  const tipo = next1 ? "btn-next" : "btn-back";

  return (
    <button type="button" className={`btn ${tipo} btn-${size}`}>
      {label}
    </button>
  );
};

Boton.Proptypes = {
    label: Proptypes.string,
    next1: Proptypes.bool,
    size: Proptypes.oneOf(["chico", "mediano", "grande"]),
};

Boton.defaultProps = {
    back: "Botón",
    next1: true,
    size: "mediano"
};