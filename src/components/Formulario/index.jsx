import "./style.css";

const Formulario = ({
  opcao,
  coluna1,
  coluna2,
  coluna3,
  coluna4,
  coluna5,
  coluna6,
  coluna7,
  handleAddFormChange,
  handleAddFormSubmit,
}) => {
  if (opcao == "Trilhas") {
    return (
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          required="required"
          placeholder={coluna2}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna3}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna4}
          onChange={handleAddFormChange}
        />
        <button className="btn-add" type="submit">
          Adicionar
        </button>
      </form>
    );
  } else if (opcao == "Cursos") {
    return (
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          required="required"
          placeholder={coluna2}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna3}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna4}
          onChange={handleAddFormChange}
        />
        <button className="btn-add" type="submit">
          Adicionar
        </button>
      </form>
    );
  } else if (opcao == "Aulas") {
    return (
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          required="required"
          placeholder={coluna2}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna3}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna4}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna5}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder={coluna6}
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          required="required"
          placeholder={coluna7}
          onChange={handleAddFormChange}
        />
        <button className="btn-add" type="submit">
          Adicionar
        </button>
      </form>
    );
  } else if (opcao == "Usuários") {
    return (
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          required="required"
          placeholder={coluna1}
          onChange={handleAddFormChange}
        />
        <button className="btn-add" type="submit">
          Adicionar
        </button>
      </form>
    );
  }
};

export default Formulario;
