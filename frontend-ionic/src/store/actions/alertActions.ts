import * as types from '../types';
import { ActionCreator, Action } from 'redux';
import { IAlert } from '../reducers/alertReducer';

//Alert Actions
export interface IAlertActions extends Action {
  type:
    | types.SET_ALERT
    | types.ADD_ALERT_TO_LIST
    | types.REMOVE_ALERT_FROM_LIST;
  payload?: IAlert;
}

//Alert Action : Setting alert, caught in saga
const addAlertToList: ActionCreator<IAlertActions> = (payload: IAlert) => ({
  type: types.ADD_ALERT_TO_LIST,
  payload: payload,
});
const setAlert: ActionCreator<IAlertActions> = (payload: IAlert) => ({
  type: types.SET_ALERT,
  payload: payload,
});

//Alert Action : Remove alert, caught in saga

const removeAlertFromList: ActionCreator<IAlertActions> = (
  payload: IAlert
) => ({
  type: types.REMOVE_ALERT_FROM_LIST,
  payload: payload,
});

export { setAlert, addAlertToList, removeAlertFromList };