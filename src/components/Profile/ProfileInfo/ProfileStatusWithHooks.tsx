import React, { useState, useEffect, ChangeEvent } from 'react';

type PropsType ={
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({status, updateStatus }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [localStatus, setLocalStatus] = useState<string>(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]); //принимает зависимость от статуса прищедшего в пропсах и синхронизирует статусы в ЛС и ГС

  const activateEditMode = () => {
    setEditMode(true);
    // setStatus(props.status); //сетаем статус из пропсов, чтобы инпут не обнулялся при переходе с других страниц
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(localStatus); //TC передаем статус(текущее значение поля инпута - сидящее в 'локальном' стейте)
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.target.value); //сетаем в ЛС хука текущее значение поля инпута
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{status || '-----'}</span>
        </div> //копия из ГС(пропсы)
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={localStatus}></input>
        </div> //вначале копия из ЛС, во время изменения сохранение в локальном стейте обработчик onChange, после потери фокуса deactivateEditMode отпраялем данные на сервер, после ответа сервера меняется ГС и рендер статуса
      )}
    </div> //по условию показываем или статус или поле редактирования
  );
};

export default ProfileStatusWithHooks;
