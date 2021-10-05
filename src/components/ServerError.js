import React, { useState } from 'react';
import './ServerError.scss';

function ServerError() {
  return (
    <p class="server-error-message">Ошибка сервера. Попробуйте ещё раз</p>
  )
}

export default ServerError;