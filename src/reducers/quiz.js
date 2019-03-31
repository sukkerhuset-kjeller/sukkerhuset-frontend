import { REQUEST_QUIZ, RECIEVE_QUIZ } from '../actions';

const initialState = {
  quiz: {},
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUIZ:
      return {
        ...state,
        quiz: action.quiz,
      };
    case RECIEVE_QUIZ:
      return {
        ...state,
        quiz: action.quiz,
      };
    default:
      return state;
  }
};

export default quizReducer;
