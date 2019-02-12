import { combineReducers } from "redux";

import globalReducer from "./global";
import templatesReducer from "./templates";
import propertiesReducer from "./properties";

const rootReducer = combineReducers({
  global: globalReducer,
  templates: templatesReducer,
  properties: propertiesReducer
});

export default rootReducer;
