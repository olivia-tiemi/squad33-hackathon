import "./style.css";
import { useState, useEffect } from "react";
import BarraProgresso from "../BarraProgresso";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const Topicos = ({ setUrlVideo }) => {
  const [count, setCount] = useState(0);
  const [cursos, setCursos] = useState([]);
  const [aulaAtual, setAulaAtual] = useState();
  let { curso_id } = useParams();
  const getCurso = async () => {
    try {
      const { data } = await axios.get(`/cursos`, {
        withCredentials: true,
      });
      setCursos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurso();
  }, []);

  const cursoAtual = cursos.find((curso) => curso.id === Number(curso_id));

  return (
    <div className="topicos">
      <ul>
        <BarraProgresso bgcolor={"lightgreen"} completed={count} />
        {cursoAtual &&
          cursoAtual.aulas.map((aula, index) => {
            return (
              <li
                className={`nome-aula ${
                  aula.id === aulaAtual ? " aula-atual" : ""
                }`}
                key={index}
                onClick={() => {
                  setAulaAtual(aula.id);
                }}
              >
                <label id="label-subtopicos">
                  <input
                    name={index}
                    type="checkbox"
                    id="subtopicos"
                    onClick={() => {
                      const tamSubtopicos =
                        document.querySelectorAll("#subtopicos");
                      var cresc = parseInt(100 / tamSubtopicos.length);
                      if (
                        document.getElementsByName(`${index}`)[0].checked ==
                        true
                      ) {
                        setCount(count + cresc);
                      } else if (
                        document.getElementsByName(`${index}`)[0].checked ==
                        false
                      ) {
                        setCount(count - cresc);
                      }
                    }}
                  />
                  <span className="checkmark"></span>
                </label>
                <p className="texto-aula" onClick={() => setUrlVideo(aula.url)}>
                  {aula.titulo}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default Topicos;
