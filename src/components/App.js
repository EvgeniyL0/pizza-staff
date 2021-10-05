import React from 'react';
import { ResultsFilter } from './ResultsFilter';
import { ResultsTable } from './ResultsTable';
import './App.css';

function App() {
  return (
    <div className="root">
      <p className="state state_loading">Получение данных...</p>
      <p className="state state_error">
        Ошибка. Попробуйте обновить страницу
    </p>
      <div className="results">
        <ResultsFilter
        @change-sort="sortBy = $event"
        @change-role="role = $event"
        @change-status="isArchive = $event"
        />
        <ResultsTable : list="employees" />
      </div>
    </div>
  );
}

export default App;
