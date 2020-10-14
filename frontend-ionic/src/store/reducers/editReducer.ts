import { IEditPage } from '../../components/edit/edit';
import * as types from '../types';

const initialEditState: IEditPage = {
    name: '',
    uri: ''
}

export const editReducer = (
  state: IEditPage = initialEditState,
  action: {
    type:types.SET_EDIT
    payload: IEditPage;
  }
): IEditPage => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_EDIT:
        return payload;   
    default:
      return state;
  }
};
