let initialState = {};

export type InitialStateType = typeof initialState

const sidebarReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default sidebarReducer;
