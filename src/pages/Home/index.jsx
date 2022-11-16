import "./style.scss";
import Trilhas from "../../components/Trilhas";
import ListaCurso from "../../components/ListaCurso";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getItem } from "../../utils/storage";

function Home() {
  const [cliqueAtivo, setCliqueAtivo] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [trilhaAtual, setTrilhaAtual] = useState();
  const roles = getItem("roles").split(",");

  return (
    <div className="page-home">
      <h1 className="escolher-trilha">Escolha a sua Trilha</h1>
      <Trilhas
        setTrilhaAtual={setTrilhaAtual}
        setCliqueAtivo={setCliqueAtivo}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {cliqueAtivo && (
        <ListaCurso
          trilhaAtual={trilhaAtual}
          cliqueAtivo={cliqueAtivo}
          setCliqueAtivo={setCliqueAtivo}
        />
      )}
      {roles.includes("ADM") && (
        <Link to="/admin" className="go-home">
          Ir para o lounge de admin →
        </Link>
      )}
    </div>
  );
}

export default Home;
