const regexpName = /^[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?\s[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?$/;
const regexpPhone = /^\+7\s\(\d{3}\)\s\d{3}-\d{4}$/;
const regexpDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d\d$/;

export {
  regexpName,
  regexpPhone,
  regexpDate
}