import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ curso }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="trilha-info">
          <Link
            to={{
              pathname: `/aula/${curso[0].id}`,
            }}
          >
            Acessar
          </Link>
          {curso[0].nome}
        </div>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">
          {curso[0].aulas.map((aula, index) => {
            return <li key={index}>{aula.titulo}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
