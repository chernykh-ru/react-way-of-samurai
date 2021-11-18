import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
    // setStatus(props.status); //сетаем статус из пропсов, чтобы инпут не обнулялся при переходе с других страниц
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status); //TC передаем статус(текущее значение поля инпута - сидящее в 'локальном' стейте)
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value); //сетаем в ЛС хука текущее значение поля инпута
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
        </div> //копия из ГС(пропсы)
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}></input>
        </div> //вначале копия из ЛС, во время изменения сохранение в локальном стейте обработчик onChange, после потери фокуса deactivateEditMode отпраялем данные на сервер, после ответа сервера меняется ГС и рендер статуса
      )}
    </div> //по условию показываем или статус или поле редактирования
  );
};

export default ProfileStatusWithHooks;
