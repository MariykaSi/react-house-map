import {
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_ERROR
} from "../constants/actions/properties";

const initialState = {
  list: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES_SUCCESS: {
      return {
        ...state,
        list: action.payload.data
      };
    }
    case GET_PROPERTIES_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
