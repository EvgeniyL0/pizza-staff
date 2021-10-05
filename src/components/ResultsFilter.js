import React, { useState } from 'react';
import ServerError from './ServerError';
import './ResultsFilter.scss';

function ResultsFilter(props) {
  const [role, setRole] = useState("все");
  const [isArchive, setIsArchive] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(false);


  return (
    <div className="filter">
      { error && <ServerError /> }
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
            class="filter__select"
            v-model="role"
          @change="$emit('change-role', role)"
          >
            <option
              v-for="(item, index) in $store.getters.getRoles"
              : key="index"
            :value="item"
            >
              {{ item }}
            </option>
          </select>
        </fieldset>
        <fieldset>
          <label className="filter__custom-checkbox">
            <input
              type="checkbox"
              name="status"
              v-model="isArchive"
              @change="$emit('change-status', isArchive)"
            />
            <span>В архиве</span>
          </label>
          </fieldset>
          <fieldset>
            <button type="button" className="filter__button" @click="openPopup = true">
              <img src="../assets/images/person-plus.svg" alt />
            </button>
          </fieldset >
      </form >
      <add-popup
        v-if="openPopup"
        @add-new="addNewEmployee"
        @close-popup="closePopup"
        : loading = "showLoader"
      />
    </div >
  )
}

export default ResultsFilter;