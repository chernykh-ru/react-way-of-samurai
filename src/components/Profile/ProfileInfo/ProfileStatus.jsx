import React, { Component } from 'react';

export default class ProfileStatus extends Component {
  //create local state
  state = {
    editMode: false,
    status: this.props.status,
  }; //ЛС единожды при первой отрисовке
  //методом меняем флаг на true(метод setState способ обновить стейт, передать объект, свойства которого перезапишут нужную часть стейта)
  //setState асинхронен, после выполнения реакт выполнит рендер компонента
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status); //передаем статус(текущее значение поля инпута - сидящее в локальном стейте)
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    }); //сетаем в ЛС текущее значение поля инпута
  };

  componentDidUpdate(prevProps, prevState) {
    // let p = this.props;
    // let s = this.state;
    // console.log('cDU');
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      }); //обязательно через условие(иначе цикл!)//если статус в предыдущих пропсах не равен статусу в новых пропсах, засетать в локальный стейт статус из новых пропсов
    }
  }

  render() {
    // console.log('render');
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
          </div> //копия из ГС(пропсы)
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              value={this.state.status}></input>
          </div> //вначале копия из ЛС, во время изменения сохранение в локальном стейте обработчик onChange, после потери фокуса deactivateEditMode отпраялем данные на сервер, после ответа сервера меняется ГС и рендер статуса
        )}
      </div> //по условию показываем или статус или поле редактирования
    );
  }
}

// export default ProfileStatus;
