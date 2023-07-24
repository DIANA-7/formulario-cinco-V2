import Proptypes from "prop-types";
import "./Boton.css";


export const Boton = ({ label, next1 }) => {
  
  const tipo = next1 ? "btn-next" : "btn-back";

  return (
    <button type="button" className={`btn ${tipo}`}>
      {label}
    </button>
  );
};

Boton.Proptypes = {
    label: Proptypes.string,
    next1: Proptypes.bool,
};

Boton.defaultProps = {
    back: "Botón",
    next1: true,
};