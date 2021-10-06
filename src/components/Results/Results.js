import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, selectEmployees } from '../../features/emloyess/employeesSlice';
import ResultsFilter from '../ResultsFilter/ResultsFilter';
import ResultsTable from '../ResultsTable/ResultsTable';
import AddPopup from '../AddPopup/AddPopup';
import './Results.scss';

function Results() {
  const employees = useSelector(selectEmployees).slice().sort((a, b) => {
    if (a["name"] < b["name"]) return -1;
    if (a["name"] > b["name"]) return 1;
  });
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState(employees);
  const [isArchive, setIsArchive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function getDateFromStr(originalString) {
    const arrOfString = originalString.split('.');
    arrOfString.reverse();
    return Date.parse(arrOfString.join('-'));
  }

  function handleChangeSort(e) {
    const sortBy = e.target.value;

    if (sortBy === "name") {
      setFilteredList(employees.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
      }));
      console.log(filteredList);
    } else {
      setFilteredList(employees.sort((a, b) => {
        return (
          getDateFromStr(a[sortBy]) - getDateFromStr(b[sortBy])
        );
      }));
      console.log(filteredList);
    }
  }

  function handleChangeRole(e) {
    const role = e.target.value;

    if (role === "все") {
      employees.filter((item) => {
        return item.isArchive === isArchive;
      });
    } else {
      employees.filter((item) => {
        return item.role === role && item.isArchive === isArchive;
      });
    }
  }

  function handleChangeIsArchive(e) {
    setIsArchive(e.target.value);
  }

  function handleOpenClosePopup(e) {
    setShowPopup(!showPopup);
  }

  function handleAddNewEmployee(e) {
    e.preventDefault();
    dispatch(addEmployee(e.target.value));
    setShowPopup(!showPopup);
  }

  return (
    <div className="results">
      <ResultsFilter
        onChangeSort={handleChangeSort}
        onChangeRole={handleChangeRole}
        onChangeIsArchive={handleChangeIsArchive}
      />
      <ResultsTable list={filteredList} />
      {showPopup && <AddPopup onAddNew={handleAddNewEmployee} onClosePopup={handleOpenClosePopup} />}
    </div>
  );
}

export default Results;
