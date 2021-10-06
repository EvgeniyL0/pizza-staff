import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoles } from '../../features/emloyess/employeesSlice';
import './ResultsFilter.scss';

function ResultsFilter(props) {
  const roles = useSelector(selectRoles);

  return (
    <div className="filter">
      <form className="filter__form">
        <fieldset>
          <span>Сортировать по:</span>
          <label className="filter__custom-radio">
            <input
              type="radio"
              name="sort"
              value="name"
              checked
              onChange={props.onChangeSort}
            />
            <span>Имя</span>
          </label>
          <label className="filter__custom-radio">
            <input
              type="radio"
              name="sort"
              value="birthday"
              onChange={props.onChangeSort}
            />
            <span>Дата рожд.</span>
          </label>
        </fieldset>
        <fieldset>
          <label for="role">Должность:</label>
          <select
            name="role"
            className="filter__select"
            onChange={props.onChangeRole}
          >
            <option value='all'>all</option>
            {
              roles.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))
            }
          </select>
        </fieldset>
        <fieldset>
          <label className="filter__custom-checkbox">
            <input
              type="checkbox"
              name="status"
              onChange={props.onChangeIsArchive}
            />
            <span>В архиве</span>
          </label>
        </fieldset>
        <fieldset>
          <button type="button" className="filter__button" onClick={props.onClickAddPopupButton}>
            <img src="../../images/person-plus.svg" alt />
          </button>
        </fieldset >
      </form >
    </div >
  )
}

export default ResultsFilter;