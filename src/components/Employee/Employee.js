import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editEmployee, selectEmployees, selectRoles } from '../../features/emloyess/employeesSlice';
import { regexpName, regexpPhone, regexpDate } from "../../assets/constants.js";
import './Employee.scss';

function Employee(props) {
  let { id } = useParams();
  const history = useHistory();
  const employees = useSelector(selectEmployees);
  const roles = useSelector(selectRoles);
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState(employees.find(item => item.id === id));
  const [validation, setValidation] = useState({ name: false, phone: false, birthday: false, role: false });
  const [notValid, setNotValid] = useState(true);

  function handleChangeField(e) {
    setEmployee(employee[e.target.name] = e.target.value);
  }

  function handleCancelButtonClick(e) {
    e.preventDefault();
    history.goBack();
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(editEmployee(employee));
    history.goBack();
  }

  useEffect(() => {
    setValidation({
      name: regexpName.test(employee.name),
      phone: regexpPhone.test(employee.phone),
      birthday: regexpDate.test(employee.birthday),
      role: employee.role !== "",
    });
    setNotValid(Object.values(validation).some((item) => item === false));
  })

  return (
    <div class="profile">
      <form class="profile__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          className="profile__input"
          value={employee.name}
          onChange={handleChangeField}
        />
        <span
          className={!validation.name ? 'profile__error-message_show' : 'profile__error-message'}
        >Введите фамилию и имя</span>
        <input
          type="text"
          name="phone"
          className="profile__input"
          value={employee.phone}
          onChange={handleChangeField}
        />
        <span
          className={!validation.name ? 'profile__error-message_show' : 'profile__error-message'}
        >Введите телефон в формате +7 (ххх) ххх-хххх</span>
        <input
          type="text"
          name="birthday"
          className="profile__input"
          value={employee.birthday}
          onChange={handleChangeField}
        />
        <span
          className={!validation.birthday ? 'profile__error-message_show' : 'profile__error-message'}
        >Введите дату в формате ДД.ММ.ГГГГ</span>
        <select name="role" className="profile__select" value={employee.role} onChange={handleChangeField}>
          {
            roles.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))
          }
        </select >
        <label className="profile__custom-checkbox">
          <input type="checkbox" name="status" value={employee.isArchive} onChange={handleChangeField} />
          <span>В архиве</span>
        </label>
        <fieldset>
          <button
            className="profile__button"
            disabled={notValid}
          >Сохранить
          </button>
          <button className="profile__button" onClick={handleCancelButtonClick} >
            Отмена
          </button >
        </fieldset >
      </form >
      <img
        src="../../assets/images/avatar.png"
        alt="employee-avatar"
        className="profile__avatar"
      />
    </div >
  )
}

export default Employee;