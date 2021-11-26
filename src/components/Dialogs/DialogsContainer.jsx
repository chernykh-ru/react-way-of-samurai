import { connect } from 'react-redux';
import {
  addMessage,
  // updateNewMessageTextActionCreator,//add redux-form
} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

//connect в mstp отдаст стейт
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    // isAuth: state.auth.isAuth, //вытаскиваем из стейта инфу залогинен или нет
  };
};

//колбэки
//connect в mdtp засунет store.dispatch.bind(store)
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

//connect from react-redux
//двойной вызов ()() -  вызываем функцию connect, она возвращает другую функцию и мы вызываем другую функцию, которую нам вернул предыдущий вызов
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);//add compose
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default DialogsContainer;//compose

//оборачиваем compose (каждая функция примет один параметр, его возвращенное взначение будет передано вышестоящей(слева) функции как аргумент), выполнение идет справа налево(снизу вверх)
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
