import "./style.css";

const ReadOnlyRow = ({ trilha, handleEditClick, handleDeleteClick, opcao }) => {
  {
    if (opcao == "Trilhas") {
      return (
        <tr className="linha">
          <td>{trilha.id}</td>
          <td>{trilha.nomeDaTrilha}</td>
          <td>{trilha.urlImagem}</td>
          <td>{trilha.descricao}</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    } else if (opcao == "Cursos") {
      return (
        <tr className="linha">
          <td>{trilha.id}</td>
          <td>{trilha.nome}</td>
          <td>{trilha.descricao}</td>
          <td>{trilha.trilha_id}</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    } else if (opcao == "Aulas") {
      return (
        <tr className="linha">
          <td>{trilha.id}</td>
          <td>{trilha.titulo}</td>
          <td>{trilha.descricao}</td>
          <td>{trilha.professor}</td>
          <td>{trilha.url}</td>
          <td>{trilha.tipo}</td>
          <td>{trilha.curso_id}</td>
          <td>{trilha.concluido}</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    } else if (opcao == "Usuários") {
      return (
        <tr className="linha">
          <td>{trilha.username}</td>
          <td>{trilha.admin}</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    }
  }
};

export default ReadOnlyRow;
