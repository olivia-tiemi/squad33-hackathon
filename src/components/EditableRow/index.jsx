import React from "react";
import "./style.css";

const EditableRow = ({
  opcao,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  if (opcao == "Trilhas") {
    return (
      <tr className="edit-row">
        <form action="">
          <td></td>
          <td>
            <input
              type="text"
              required="required"
              placeholder="Digite o nome da trilha..."
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td>
            <input
              type="text"
              required="required"
              placeholder="Digite o url da imagem..."
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td>
            <input
              type="text"
              required="required"
              placeholder="Digite a descrição..."
              onChange={handleEditFormChange}
            ></input>
          </td>
          <td className="save-cancel">
            <button className="salvar" type="submit"></button>
            <button
              className="cancelar"
              type="button"
              onClick={handleCancelClick}
            ></button>
          </td>
        </form>
      </tr>
    );
  } else if (opcao == "Cursos") {
    return (
      <tr className="edit-row">
        <td></td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome do curso..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite a descricao do curso..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o id da trilha..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="save-cancel">
          <button className="salvar" type="submit"></button>
          <button
            className="cancelar"
            type="button"
            onClick={handleCancelClick}
          ></button>
        </td>
      </tr>
    );
  } else if (opcao == "Aulas") {
    return (
      <tr className="edit-row">
        <td></td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome da aula..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite a descrição da aula..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o professor da aula..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite a URL da aula..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o tipo da aula..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="save-cancel">
          <button className="salvar" type="submit"></button>
          <button
            className="cancelar"
            type="button"
            onClick={handleCancelClick}
          ></button>
        </td>
      </tr>
    );
  } else if (opcao == "Usuários") {
    return (
      <tr className="edit-row">
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome do usuário..."
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td className="save-cancel">
          <button className="salvar" type="submit"></button>
          <button
            className="cancelar"
            type="button"
            onClick={handleCancelClick}
          ></button>
        </td>
      </tr>
    );
  }
};

export default EditableRow;
