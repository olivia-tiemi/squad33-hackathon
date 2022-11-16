import "./style.scss";

const Card = ({ trilha, setCliqueAtivo, setTrilhaAtual }) => {
  const mostrarAulas = () => {
    setCliqueAtivo(true);
    setTrilhaAtual(trilha);
  };
  return (
    <div className="trilha" onClick={mostrarAulas}>
      <img src={trilha.urlImagem} alt="Imagem da trilha." />
      <p>{trilha.nomeDaTrilha}</p>
    </div>
  );
};

export default Card;
