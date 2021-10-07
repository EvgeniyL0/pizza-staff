import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, copyToStorage, selectRoles } from '../../features/emloyess/employeesSlice';
import { regexpName, regexpPhone, regexpDate } from "../../assets/constants.js";
import './AddPopup.scss';
import CloseIcon from '../../images/close.svg';

function AddPopup(props) {
  const dispatch = useDispatch();
  const roles = useSelector(selectRoles);
  const blank = { id: "", name: "", isArchive: false, role: "", phone: "", birthday: "" };
  const [employee, setEmployee] = useState(blank);
  const [validation, setValidation] = useState({ name: false, phone: false, birthday: false, role: false });
  const [notValid, setNotValid] = useState(true);

  function handleChangeField(e) {
    let copyOfEmployee = { ...employee };
    copyOfEmployee[e.target.name] = e.target.value;
    setEmployee({ ...copyOfEmployee });
  }

  function handleOnAddNew(e) {
    e.preventDefault();
    dispatch(addEmployee(employee));
    dispatch(copyToStorage());
    props.onClosePopup();
  }

  useEffect(() => {
    setValidation({
      ...{
        name: regexpName.test(employee.name),
        phone: regexpPhone.test(employee.phone),
        birthday: regexpDate.test(employee.birthday),
        role: employee.role !== "---",
      }
    });
  }, [employee])

  useEffect(() => {
    setNotValid(Object.values(validation).some((item) => item === false));
  }, [validation]);

  return (
    <div className="add-popup">
      <form
        className="add-popup__form"
        onSubmit={handleOnAddNew}
      >
        <img
          className="add-popup__close-icon"
          src={CloseIcon}
          alt="close-icon"
          onClick={props.onClosePopup}
        />
        <fieldset>
          <label htmlFor="name">Фамилия Имя:</label>
          <input
            type="text"
            name="name"
            className="add-popup__input"
            onChange={handleChangeField}
          />
          <span
            className={!validation.name ? 'add-popup__error-message_show' : 'add-popup__error-message'}
          >Введите фамилию и имя</span>
        </fieldset>
        <fieldset>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            name="phone"
            className="add-popup__input"
            onChange={handleChangeField}
          />
          <span
            className={!validation.phone ? 'add-popup__error-message_show' : 'add-popup__error-message'}
          >Введите телефон в формате +7 (ххх) ххх-хххх</span>
        </fieldset >
        <fieldset>
          <label htmlFor="birthday">Дата рождения:</label>
          <input
            type="text"
            name="birthday"
            className="add-popup__input"
            onChange={handleChangeField}
          />
          <span
            className={!validation.birthday ? 'add-popup__error-message_show' : 'add-popup__error-message'}
          >Введите дату в формате ДД.ММ.ГГГГ</span>
        </fieldset >
        <fieldset>
          <label htmlFor="role">Должность:</label>
          <select
            className="add-popup__select"
            name="role"
            onChange={handleChangeField}
          >
            <option>---</option>
            {
              roles.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))
            }
          </select>
          <span
            className={!validation.role ? 'add-popup__error-message_show' : 'add-popup__error-message'}
          >Выберите должность</span>
        </fieldset >
        <button
          className="add-popup__button"
          disabled={notValid}
        >Добавить</button>
      </form >
    </div >
  )
}

export default AddPopup;