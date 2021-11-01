import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

//ключи из стейта, значения соответствующие редьюсеры(ветки нашего глобального стейта)
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

//создаем редаксовский стор с помощью функции createStore(cS мы отдаем закомбайненые редьюсеры)
let store = createStore(reducers);

export default store;
