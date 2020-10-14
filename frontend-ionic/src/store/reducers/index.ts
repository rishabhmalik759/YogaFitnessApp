import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { userReducer } from './userReducer';
import { appCurrentReducer } from './appReducer';
import { alertReducer } from './alertReducer';
import {editReducer} from './editReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  userState: userReducer,
  appCurrent: appCurrentReducer,
  alertList:alertReducer,
  editPage: editReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
