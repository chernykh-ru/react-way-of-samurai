import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer'; //add ts
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

//ключи из стейта, значения соответствующие редьюсеры(ветки нашего глобального стейта)
const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer;//(globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>//ReturnType утилита создает тип, состоящий из возвращаемого типа функции (самостоятельно определяет тип возвращаемый из <RootReducerType>) и присваиваем его AppStateType

// let state: AppStateType
// state.

//создаем редаксовский стор с помощью функции createStore(cS мы отдаем закомбайненые редьюсеры)
//добавляем промежуточный слой middleware thunk
// let store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
