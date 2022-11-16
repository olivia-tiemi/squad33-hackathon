import "./style.css";
import { useState, useEffect } from "react";
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";
import Formulario from "../Formulario";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

const ConteudoAdmin = () => {
  const [trilha, setTrilhas] = useState(0);
  const [cursos, setCursos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [trilhasSemPaginacao, setTrilhaSemPaginacao] = useState([]);

  const getTrilhas = async () => {
    try {
      const trilhas = [];
      const { data } = await axios.get(`/trilhas`);
      const totalPages = [];

      for (let i = 0; i < data.totalPages; i++) {
        totalPages[i] = i;
      }

      await Promise.all(
        totalPages.map(async (i) => {
          const { data: data1 } = await axios.get(`/trilhas?page=${i}`);
          trilhas.push(...data1.content);
        })
      );

      setTrilhaSemPaginacao(trilhas);
    } catch (error) {
      console.error(error);
    }
  };

  const getCursos = async () => {
    try {
      const { data } = await axios.get("/cursos");
      setCursos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsuarios = async () => {
    try {
      const { data } = await axios.get("/usuarios");
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrilhas();
    getCursos();
    getUsuarios();
  }, []);

  const [addFormData, setAddFormData] = useState({
    nomeDaTrilha: "",
    descricao: "",
    nome: "",
    urlImagem: "",
    url: "",
    trilha_id: "",
    titulo: "",
    professor: "",
    tipo: "",
    concluido: "",
  });

  const [editFormData, setEditFormData] = useState({
    nomeDaTrilha: "",
    descricao: "",
    nome: "",
    urlImagem: "",
    url: "",
    trilha_id: "",
    titulo: "",
    professor: "",
    tipo: "",
    concluido: "",
  });

  const [editTrilhaId, setEditTrilhaId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    if (opcao === "Trilhas") {
      try {
        const response = await axios.post(`/administrador/trilhas`, {
          nomeDaTrilha: addFormData.nomeDaTrilha,
          urlImagem: addFormData.urlImagem,
          descricao: addFormData.descricao,
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (opcao === "Cursos") {
      try {
        const response = await axios.post(
          `/administrador/cursos/${editTrilhaId}`,
          {
            nome: addFormData.nome,
            descricao: addFormData.descricao,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
    if (opcao === "Aulas") {
      try {
        const response = await axios.postt(
          `/administrador/aulas/${editTrilhaId}`,
          {
            titulo: addFormData.titulo,
            descricao: addFormData.descricao,
            professor: addFormData.professor,
            url: addFormData.url,
            tipo: addFormData.tipo,
            concluido: addFormData.concluido,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    if (opcao === "Trilhas") {
      try {
        const response = await axios.put(
          `/administrador/trilhas/${editTrilhaId}`,
          {
            nomeDaTrilha: editFormData.nomeDaTrilha,
            urlImagem: editFormData.urlImagem,
            descricao: editFormData.descricao,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
    if (opcao === "Cursos") {
      try {
        const response = await axios.put(
          `/administrador/cursos/${editTrilhaId}`,
          {
            nome: editFormData.nome,
            descricao: editFormData.descricao,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
    if (opcao === "Aulas") {
      try {
        const response = await axios.put(
          `/administrador/aulas/${editTrilhaId}`,
          {
            titulo: editFormData.titulo,
            descricao: editFormData.descricao,
            professor: editFormData.professor,
            url: editFormData.url,
            tipo: editFormData.tipo,
            concluido: editFormData.concluido,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditClick = (event, trilha) => {
    event.preventDefault();

    setEditTrilhaId(trilha.id);
    const formValues = {
      nomeDaTrilha: trilha.nomeDaTrilha,
      descricao: trilha.descricao,
      nome: trilha.nome,
      urlImagem: trilha.urlImagem,
      url: trilha.url,
      trilha_id: trilha.trilha_id,
      titulo: trilha.titulo,
      professor: trilha.professor,
      tipo: trilha.tipo,
      concluido: trilha.concluido,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditTrilhaId(null);
  };

  const handleDeleteClick = async (trilhaId) => {
    if (opcao === "Trilhas") {
      try {
        const response = await axios.delete(
          `/administrador/trilhas/${trilhaId}`
        );
      } catch (err) {
        console.log(err);
      }
    }
    if (opcao === "Cursos") {
      try {
        const response = await axios.delete(
          `/administrador/cursos/${trilhaId}`
        );
      } catch (err) {
        console.log(err);
      }
    }
    if (opcao === "Aulas") {
      try {
        const response = await axios.delete(`/administrador/aulas/${trilhaId}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const [opcao, setOpcao] = useState("");
  const [dados, setDados] = useState(trilhasSemPaginacao);
  const [coluna1, setColuna1] = useState(
    "Selecione uma opção no menu ao lado."
  );
  const [coluna2, setColuna2] = useState("");
  const [coluna3, setColuna3] = useState("");
  const [coluna4, setColuna4] = useState("");
  const [coluna5, setColuna5] = useState("");
  const [coluna6, setColuna6] = useState("");
  const [coluna7, setColuna7] = useState("");
  const [coluna8, setColuna8] = useState("");

  return (
    <div className="app-container">
      <nav className="side-bar">
        <ul className="opcoes">
          <li>
            <a
              id="trilha"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("trilha").innerHTML);
                setDados(trilhasSemPaginacao);
                setColuna1("Id");
                setColuna2("Título");
                setColuna3("URL - Imagem");
                setColuna4("Descrição");
                setColuna5("");
                setColuna6("");
                setColuna7("");
                setColuna8("");
              }}
              className={opcao === "Trilhas" ? "selected-item" : ""}
            >
              Trilhas
            </a>
          </li>
          <li>
            <a
              id="cursos"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("cursos").innerHTML);
                setDados(cursos);
                setColuna1("Id");
                setColuna2("Título");
                setColuna3("Descrição");
                setColuna4("Id Trilha");
                setColuna5("");
                setColuna6("");
                setColuna7("");
                setColuna8("");
              }}
              className={opcao === "Cursos" ? "selected-item" : ""}
            >
              Cursos
            </a>
          </li>
          <li>
            <a
              id="aulas"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("aulas").innerHTML);
                setDados(cursos);
                setColuna1("Id");
                setColuna2("Título");
                setColuna3("Descrição");
                setColuna4("Professor");
                setColuna5("URL");
                setColuna6("Tipo");
                setColuna7("Id Curso");
                setColuna8("Concluido");
              }}
              className={opcao === "Aulas" ? "selected-item" : ""}
            >
              Aulas
            </a>
          </li>
          <li>
            <a
              id="usuarios"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("usuarios").innerHTML);
                setDados(usuarios);
                setColuna1("Username");
                setColuna2("Admin");
                setColuna3("");
                setColuna4("");
                setColuna5("");
                setColuna6("");
                setColuna7("");
                setColuna8("");
              }}
              className={opcao === "Usuários" ? "selected-item" : ""}
            >
              Usuários
            </a>
          </li>
        </ul>
      </nav>
      <nav className="conteudo-admin">
        <form onSubmit={handleEditFormSubmit}>
          <table className="tabela">
            <thead className="tabela-cabecalho">
              <tr>
                <th id="coluna1">{coluna1}</th>
                <th id="coluna2">{coluna2}</th>
                <th id="coluna3">{coluna3}</th>
                <th id="coluna4">{coluna4}</th>
                <th id="coluna5">{coluna5}</th>
                <th id="coluna6">{coluna6}</th>
                <th id="coluna7">{coluna7}</th>
                <th id="coluna8">{coluna8}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dados.map((trilha, index) => (
                <>
                  {editTrilhaId === trilha.id ? (
                    <EditableRow
                      key={index}
                      opcao={opcao}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      key={index}
                      opcao={opcao}
                      trilha={trilha}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
        <div className="add-options">
          <h2 id="tipo" className="add">
            Adicionar {opcao}
          </h2>
          <Formulario
            opcao={opcao}
            coluna1={coluna1}
            coluna2={coluna2}
            coluna3={coluna3}
            coluna4={coluna4}
            coluna5={coluna5}
            coluna6={coluna6}
            coluna7={coluna7}
            coluna8={coluna8}
            handleAddFormSubmit={handleAddFormSubmit}
            handleAddFormChange={handleAddFormChange}
          />
        </div>
      </nav>
      <Link to="/home" className="go-home">
        Ir para o menu de trilhas →
      </Link>
    </div>
  );
};

export default ConteudoAdmin;
