import "./style.css";

function Conteudo({ urlVideo }) {
  {
    try {
      return (
        <div className="conteudo-aula">
          <a href={urlVideo} target="blank">
            Selecione uma aula para ver o link: {urlVideo}
          </a>
          <iframe
            className="conteudo-aula"
            src={urlVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    } catch (error) {
      console.error(error);
      <h1>Teste{console.log("hello world")}</h1>;
    }
  }
}
export default Conteudo;
