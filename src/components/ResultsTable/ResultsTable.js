import React from 'react';
import { Link } from "react-router-dom";
import './ResultsTable.scss';

function ResultsTable(props) {
  let employeesList = props.list;
  return (
    <table className="results-table">
      <thead>
        <tr className="results-table__row">
          <th>Имя</th>
          <th>Должность</th>
          <th>Дата рожд.</th>
          <th>Телефон</th>
          <th>В архиве</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.list.map(item => (
            <tr className="results-table__row" key={item.id}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.birthday}</td>
              <td>{item.phone}</td>
              <td>{item.isArchive ? "да" : "нет"}</td>
              <td>
                <Link to={`/employees/${item.id}`}>
                  <img src="../assets/images/edit.svg" alt="edit-icon" />
                </Link>
              </td>
            </tr>
          ))
        }
      </tbody >
    </table >
  )
}

export default ResultsTable;