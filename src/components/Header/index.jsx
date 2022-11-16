import "./style.scss";
import Logo2 from "../../assets/logo2.svg";
import Logout from "../../assets/logout.svg";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { clear, getItem } from "../../utils/storage";
import { useState, useEffect } from "react";
import axios from "../../api/axios";

const Header = ({ text }) => {
  const navigate = useNavigate();
  let { curso_id } = useParams();
  const [trilha, setTrilha] = useState([]);

  const getCurso = async () => {
    try {
      const { data } = await axios.get(`/cursos`);
      const curso = data.find((curso) => curso.id === Number(curso_id));
      const { data: data1 } = await axios.get(`/trilhas/${curso.trilha_id}`);
      setTrilha(data1);
    } catch (error) {
      return text;
    }
  };

  let title = !text ? `Trilha: ${trilha.nomeDaTrilha}` : text;
  const user = getItem("user");

  const signOut = async () => {
    clear();
    navigate("/");
  };

  useEffect(() => {
    getCurso();
  }, []);

  return (
    <div className="header-pages">
      <header>
        <div className="left-side">
          <img src={Logo2} alt="Logo colorido." />
          <h1>{title}</h1>
        </div>
        <div className="right-side">
          <h1>Bem-vindo(a), {user}!</h1>
          <img src={Logout} alt="Clique para sair." onClick={signOut} />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
