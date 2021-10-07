import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoles } from '../../features/emloyess/employeesSlice';
import './ResultsFilter.scss';
import { ReactComponent as PlusIcon } from '../../images/plus.svg';

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
              defaultChecked
              onChange={props.onChangeFilter}
            />
            <span>Имя</span>
          </label>
          <label className="filter__custom-radio">
            <input
              type="radio"
              name="sort"
              value="birthday"
              onChange={props.onChangeFilter}
            />
            <span>Дата рожд.</span>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="role">Должность:</label>
          <select
            name="role"
            className="filter__select"
            onChange={props.onChangeFilter}
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
              name="isArchive"
              onChange={props.onChangeFilter}
            />
            <span>В архиве</span>
          </label>
        </fieldset>
        <fieldset>
          <button type="button" className="filter__button" onClick={props.onClickAddPopupButton}>
            <PlusIcon />
          </button>
        </fieldset >
      </form >
    </div >
  )
}

export default ResultsFilter;