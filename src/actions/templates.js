import {
  GET_TEMPLATES_START,
  GET_TEMPLATES_SUCCESS,
  GET_TEMPLATES_ERROR,
  CHANGE_TEMPLATE
} from "../constants/actions/templates";

export const getTemplatesStart = () => ({
  type: GET_TEMPLATES_START
});

export const getTemplatesSuccess = data => ({
  type: GET_TEMPLATES_SUCCESS,
  payload: data
});

export const getTemplatesError = msg => ({
  type: GET_TEMPLATES_ERROR,
  payload: msg
});

export const changeTemplate = id => ({
  type: CHANGE_TEMPLATE,
  payload: id
});
