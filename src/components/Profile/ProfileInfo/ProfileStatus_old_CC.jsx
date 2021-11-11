import styles from './ProfileInfo.module.css';

import React, { Component } from 'react';

export default class ProfileStatus extends Component {
  //create local state
  state = {
    editMode: false,
  };
  //методом меняем флаг на true(метод setState способ обновить стейт, передать объект, свойства которого перезапишут нужную часть стейта)
  //setState асинхронен, после выполнения реакт выполнит рендер компонента
  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deactivateEditMode.bind(this)}
              autoFocus={true}
              value={this.props.status}></input>
          </div>
        )}
      </div> //по условию показываем или статус или поле редактирования
    );
  }
}

// export default ProfileStatus;
