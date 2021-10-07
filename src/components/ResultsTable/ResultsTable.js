import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../../features/emloyess/employeesSlice';
import { Link } from "react-router-dom";
import './ResultsTable.scss';

function ResultsTable(props) {
  const employees = useSelector(selectEmployees);
  const [filteredList, setFilteredList] = useState(employees);

  function getDateFromStr(originalString) {
    const arrOfString = originalString.split('.');
    arrOfString.reverse();
    return Date.parse(arrOfString.join('-'));
  }

  useEffect(() => {
    let result = employees.slice();

    if (props.filter.role === "all") {
      result = result.filter((item) => {
        return item.isArchive === props.filter.isArchive;
      });
    } else {
      result = result.filter((item) => {
        return item.role === props.filter.role && item.isArchive === props.filter.isArchive;
      });
    }

    if (props.filter.sort === "name") {
      result = result.sort((a, b) => {
        if (a[props.filter.sort] < b[props.filter.sort]) return -1;
        if (a[props.filter.sort] > b[props.filter.sort]) return 1;
      });
    } else {
      result = result.sort((a, b) => {
        return (
          getDateFromStr(a[props.filter.sort]) - getDateFromStr(b[props.filter.sort])
        );
      });
    }
    setFilteredList(result.slice());
  }, [props.filter, employees]);

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
          filteredList.map(item => (
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