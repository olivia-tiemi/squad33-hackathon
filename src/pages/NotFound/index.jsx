import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section className="container-error">
      <div className="no-access">
        <h1>Não encontrado</h1>
        <br />
        <p>A página requisitada não foi encontrada.</p>
        <button onClick={goBack}>Voltar</button>
      </div>
    </section>
  );
};

export default NotFound;
