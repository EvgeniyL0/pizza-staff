import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, editEmployee, selectEmployees } from '../../features/emloyess/employeesSlice';
import ResultsFilter from '../ResultsFilter/ResultsFilter';
import ResultsTable from '../ResultsTable/ResultsTable';
import AddPopup from '../AddPopup/AddPopup';
import './Results.scss';
import arrayOfEmployees from '../../eployees.json';

function Results() {
  const employees = useSelector(selectEmployees);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([employees]);
  const [isArchive, setIsArchive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function getDateFromStr(originalString) {
    const arrOfString = originalString.split('.');
    arrOfString.reverse();
    return Date.parse(arrOfString.join('-'));
  }

  function handleChangeSort(e) {
    const results = filteredData.slice();
    const sortBy = e.target.value;

    if (sortBy === "name") {
      setFilteredData(results.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
      }));
    } else {
      setFilteredData(results.sort((a, b) => {
        return (
          getDateFromStr(a[sortBy]) - getDateFromStr(b[sortBy])
        );
      }));
    }
  }

  function handleChangeRole(e) {
    const results = filteredData.slice();
    const role = e.target.value;

    if (role === "все") {
      setFilteredData(results.filter((item) => {
        return item.isArchive === isArchive;
      }));
    } else {
      setFilteredData(results.filter((item) => {
        return item.role === role && item.isArchive === isArchive;
      }));
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
    dispatch(editEmployee(e.target.value));
    setShowPopup(!showPopup);
  }


  useEffect(() => {
    const copy = JSON.parse(localStorage.getItem("copy"));

    if (copy) {
      copy.forEach(item => {
        dispatch(addEmployee(item));
      });
    } else {
      arrayOfEmployees.forEach(item => {
        dispatch(addEmployee(item));
      });
    }
  }, [])



  return (
    <div className="results">
      <ResultsFilter
        onChangeSort={handleChangeSort}
        onChangeRole={handleChangeRole}
        onChangeIsArchive={handleChangeIsArchive}
      />
      <ResultsTable list={filteredData} />
      {showPopup && <AddPopup onAddNew={handleAddNewEmployee} onClosePopup={handleOpenClosePopup} />}
    </div>
  );
}

export default Results;
