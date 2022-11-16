import "./style.css";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section className="container-error">
      <div className="no-access">
        <h1>Não autorizado</h1>
        <br />
        <p>Você não tem acesso à página requisitada.</p>
        <button onClick={goBack}>Voltar</button>
      </div>
    </section>
  );
};

export default Unauthorized;
