import { REQUEST_MENU, RECIEVE_MENU } from '../actions';

const initialState = {
  menu: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MENU:
      return {
        ...state,
        menu: action.menu,
      };
    case RECIEVE_MENU:
      return {
        ...state,
        menu: action.menu,
      };
    default:
      return state;
  }
};

export default menuReducer;
