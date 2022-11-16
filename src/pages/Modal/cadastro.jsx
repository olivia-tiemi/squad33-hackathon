import "./style.scss";
import Logo from "../../assets/logo.png";
import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";

const ModalCadastro = ({
  id = "close",
  handleModalLoginOpening,
  onClose = () => {},
}) => {
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [matchSenha, setMatchSenha] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  const handleOpenLogin = () => {
    onClose();
    handleModalLoginOpening();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !senha) {
      setErrMsg("Por favor, preencha todos os campos.");
    }
    try {
      const response = await axios.post("/usuarios/signup", {
        username,
        senha,
      });
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response.");
      } else if (err.response?.status === 409) {
        setErrMsg("This e-mail has already been registered.");
      } else {
        setErrMsg("Registration failed.");
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    const match = senha === matchSenha;
    setValidMatch(match);
  }, [senha, matchSenha]);

  useEffect(() => {
    setErrMsg("");
  }, [username, senha, matchSenha]);

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={Logo} alt="Logo da Orange Evolution." />
        <form onSubmit={handleSubmit}>
          <div className="info">
            <input
              type="text"
              id="username"
              placeholder="Username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="info">
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="info">
            <input
              type="password"
              id="repetir-senha"
              placeholder="Repita a senha"
              onChange={(e) => setMatchSenha(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
            />
          </div>
          <p id="confirmnote" className={!validMatch ? "show" : "hide"}>
            A senha deve ser a mesma nos dois campos.
          </p>
          <button disabled={!username || !senha || !validMatch ? true : false}>
            Cadastrar
          </button>
          <p className="cadastro">
            Já está cadastrado? Faça seu{" "}
            <strong onClick={handleOpenLogin}>login.</strong>
          </p>
        </form>
        {success ? (
          <section>
            <h1>Success!</h1>
            {setTimeout(handleOpenLogin, 700)}
          </section>
        ) : (
          <p
            ref={errRef}
            className={errMsg ? "show" : "hide"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        )}
      </div>
    </div>
  );
};

export default ModalCadastro;
