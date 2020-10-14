import * as types from '../types';
import { ActionCreator, Action } from 'redux';
import { IEditPage } from '../../components/edit/edit';

//Alert Actions
export interface IEditActions extends Action {
  type:
    | types.SET_EDIT
  payload: IEditPage;
}

//Alert Action : Setting alert, caught in saga
const setEditPage: ActionCreator<IEditActions> = (payload: IEditPage) => ({
  type: types.SET_EDIT,
  payload: payload,
});

export { setEditPage };