import { REQUEST_SETTINGS, RECIEVE_SETTINGS } from '../actions';

const initialState = {
  settings: {},
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SETTINGS:
      return {
        ...state,
        settings: action.settings,
      };
    case RECIEVE_SETTINGS:
      return {
        ...state,
        settings: action.settings,
      };
    default:
      return state;
  }
};

export default settingsReducer;
