import React, { useState } from 'react';
import ResultsFilter from '../ResultsFilter/ResultsFilter';
import ResultsTable from '../ResultsTable/ResultsTable';
import AddPopup from '../AddPopup/AddPopup';
import './Results.scss';

function Results() {
  const [filterOut, setFilterOut] = useState({ sort: "name", role: "all", isArchive: false });
  const [showPopup, setShowPopup] = useState(false);

  function handleChangeFilter(e) {
    let copyOfFilter = { ...filterOut };

    if (e.target.type === "checkbox") {
      copyOfFilter[e.target.name] = e.target.checked;
    } else {
      copyOfFilter[e.target.name] = e.target.value;
    }

    setFilterOut({ ...copyOfFilter });
  }

  function handleOpenClosePopup(e) {
    setShowPopup(!showPopup);
  }

  return (
    <div className="results">
      <ResultsFilter
        onChangeFilter={handleChangeFilter}
        onClickAddPopupButton={handleOpenClosePopup}
      />
      <ResultsTable filter={filterOut} />
      {showPopup && <AddPopup onClosePopup={handleOpenClosePopup} />}
    </div>
  );
}

export default Results;
