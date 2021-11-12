import React, { useState, useRef, useEffect } from 'react';

function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(null);
  // const inputElement = useRef(null);
  // useEffect(() => {
  //   if (inputElement.current) {
  //     inputElement.current.focus();
  //   }
  // }, []);

  let activateEditMode = () => {
    setEditMode(true);
    setStatus(props.status); //сетаем статус из пропсов, чтобы инпут не обнулялся при переходе с других страниц
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status); //TC передаем статус(текущее значение поля инпута - сидящее в локальном стейте)
  };

  let onStatusChange = (e) => {
    setStatus(e.target.value); //сетаем в ЛС текущее значение поля инпута
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
        </div>
      ) : (
        <div>
          <input
            // ref={inputElement}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus
            defaultValue={status}></input>
        </div> //вначале копия из ЛС, во время изменения сохранение в локальном стейте обработчик onChange, после потери фокуса deactivateEditMode отпраялем данные на сервер, после ответа сервера меняется ГС и рендер статуса
      )}
    </div> //по условию показываем или статус или поле редактирования
  );
}

export default ProfileStatus;
