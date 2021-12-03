import { combineReducers, createStore, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer'; //add ts
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunk, { ThunkAction } from 'redux-thunk';
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

//Вывод типов из обекта actions, содержащего Action Creators
// type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
// export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U } ? U : never
export type BasicThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
//A = A extends Action from redux(ActionsTypes)
//R(возвращаемое значение) = Promise<void>//большинство санок нам ничего не возвращает(возвращает промис который ничем не резолвится), поэтому по умолчанию поставим R = Promise<void>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


//создаем редаксовский стор с помощью функции createStore(cS мы отдаем закомбайненые редьюсеры)
//добавляем промежуточный слой middleware thunk
// let store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
