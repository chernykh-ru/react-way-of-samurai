import { authAPI } from '../api/api';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}; //инициализируем стейт согласно данным из API response, isAuth флаг того, что юзер залогинен

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data, //в экшене будет сидеть объект data,который мы деструктурируем
        isAuth: true, //меняем флаг на true если пришли пользовательские данные
      };
    }
    default:
      return state;
  }
};

//AC
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
}); //AC деструктурируем объект data до составляющих userId, email, login

//TC
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

// export const getAuthUserData = () => {
//   return (dispatch) => {
//     authAPI.me().then((data) => {
//       if (data.resultCode === 0) {
//         let { id, email, login } = data.data;
//         dispatch(setAuthUserData(id, email, login));
//       }
//     });
//   };
// };

export default authReducer;
