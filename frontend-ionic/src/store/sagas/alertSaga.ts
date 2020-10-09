import { put, delay } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { IAlert } from '../reducers/alertReducer';
import { addAlertToList, removeAlertFromList } from '../actions/alertActions';

function* setAlertSaga(action: any) {
  const id = uuidv4();
  console.log(id);
  const msg = action.payload.msg;
  const alertType = action.payload.alertType;
  try {
    const alert: IAlert = { id: id, msg: msg, alertType: alertType };
    yield put(addAlertToList(alert));
    yield delay(3000);
    yield put(removeAlertFromList(alert));
  } catch (error) {
    console.log(error);
  }
}

export { setAlertSaga };