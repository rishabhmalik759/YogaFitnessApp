import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { userReducer } from './userReducer';
import { appCurrentReducer } from './appReducer';
import { alertReducer } from './alertReducer';
const rootReducer = combineReducers({
  modal: modalReducer,
  userState: userReducer,
  appCurrent: appCurrentReducer,
  alertList:alertReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
