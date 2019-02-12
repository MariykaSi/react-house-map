import {
  GET_TEMPLATES_SUCCESS,
  GET_TEMPLATES_ERROR,
  CHANGE_TEMPLATE
} from "../constants/actions/templates";

const initialState = {
  current: 1,
  list: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATES_SUCCESS: {
      return {
        ...state,
        list: action.payload
      };
    }
    case GET_TEMPLATES_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case CHANGE_TEMPLATE: {
      return {
        ...state,
        current: action.payload
      };
    }
    default:
      return state;
  }
};
