import "./style.css";
import Conteudo from "../../components/Conteudo";
import ListaAulas from "../../components/ListaAulas";
import { useState } from "react";

function Aula() {
  const [urlVideo, setUrlVideo] = useState("");
  return (
    <div className="container-aula">
      <Conteudo urlVideo={urlVideo} />
      <ListaAulas setUrlVideo={setUrlVideo} />
    </div>
  );
}
export default Aula;
