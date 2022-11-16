import "./style.css";
import Topicos from "../Topicos";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../api/axios";

function ListaAulas({ setUrlVideo }) {
  let { curso_id } = useParams();
  const [cursos, setCursos] = useState([]);

  const getCurso = async () => {
    try {
      const { data } = await axios.get(`/cursos`);
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
    <div className="aulas">
      <nav>
        <ul>
          <li>
            <a className="aula-selecionada">{cursoAtual && cursoAtual.nome}</a>
            <ul>
              {cursos.map((curso, index) => {
                if (
                  curso.trilha_id === cursoAtual.trilha_id &&
                  curso.id !== cursoAtual.id
                ) {
                  return (
                    <li key={index}>
                      <a href={index + 1}>{curso.nome}</a>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        </ul>
      </nav>

      <Topicos setUrlVideo={setUrlVideo} />
      <Link to="/home" className="go-back">
        Voltar para o menu de trilhas →
      </Link>
    </div>
  );
}
export default ListaAulas;
