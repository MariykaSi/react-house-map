import {
  GET_PROPERTIES_START,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_ERROR
} from "../constants/actions/properties";

export const getPropertiesStart = () => ({
  type: GET_PROPERTIES_START
});

export const getPropertiesSuccess = data => ({
  type: GET_PROPERTIES_SUCCESS,
  payload: data
});

export const getPropertiesError = msg => ({
  type: GET_PROPERTIES_ERROR,
  payload: msg
});
