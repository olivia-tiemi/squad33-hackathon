import "./style.scss";
import Seguinte from "../../assets/next.svg";
import Anterior from "../../assets/prev.svg";
import Card from "../Card";
import axios from "../../api/axios";
import { useEffect } from "react";
import { useState } from "react";

const Trilhas = ({
  setTrilhaAtual,
  setCliqueAtivo,
  currentPage,
  setCurrentPage,
}) => {
  const [trilhas, setTrilhas] = useState([]);
  const [length, setLength] = useState(0);

  const manipularSetaEsquerda = () => {
    setCurrentPage(currentPage === 0 ? length - 1 : currentPage - 1);
  };
  const manipularSetaDireita = () => {
    setCurrentPage(currentPage === length - 1 ? 0 : currentPage + 1);
  };

  const getTrilha = async () => {
    try {
      const { data } = await axios.get(`/trilhas?page=${currentPage}`);
      setTrilhas(data.content);
      setLength(data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrilha();
  }, [currentPage]);

  return (
    <div className="trilhas">
      {length > 1 && (
        <img
          className="seta"
          src={Anterior}
          alt="Seta apontando para a esquerda"
          onClick={manipularSetaEsquerda}
        />
      )}
      <div className="card-collection">
        {trilhas.map((trilha, index) => {
          return (
            <Card
              key={index}
              trilha={trilha}
              setCliqueAtivo={setCliqueAtivo}
              setTrilhaAtual={setTrilhaAtual}
            />
          );
        })}
      </div>
      {length > 1 && (
        <img
          className="seta"
          src={Seguinte}
          alt="Seta apontando para a direita"
          onClick={manipularSetaDireita}
        />
      )}
    </div>
  );
};

export default Trilhas;
