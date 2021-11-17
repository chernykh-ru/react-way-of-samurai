import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

//ключи из стейта, значения соответствующие редьюсеры(ветки нашего глобального стейта)
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

//создаем редаксовский стор с помощью функции createStore(cS мы отдаем закомбайненые редьюсеры)
//добавляем промежуточный слой middleware thunk
// let store = createStore(reducers, applyMiddleware(thunk));
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
