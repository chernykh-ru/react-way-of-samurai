import React, { useState, useRef, useEffect } from 'react';

function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  // const inputElement = useRef(null);
  // useEffect(() => {
  //   if (inputElement.current) {
  //     inputElement.current.focus();
  //   }
  // }, []);

  let activateEditMode = () => {
    setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      ) : (
        <div>
          <input
            // ref={inputElement}
            onBlur={deactivateEditMode}
            autoFocus
            defaultValue={props.status}></input>
        </div>
      )}
    </div> //по условию показываем или статус или поле редактирования
  );
}

export default ProfileStatus;
