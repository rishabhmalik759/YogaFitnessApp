import {
  put,
  all,
  call,
  takeEvery,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import { rsf, googleAuth } from '../../firebase';
import * as types from '../types';
import * as firebaseTypes from '../types/firebase';
import { myFirebase } from '../../firebase';
import { removeUser, setUser } from '../actions/userActions';
import { setLoading, setLogin } from '../actions/appCurrentActions';
import { setDocument, getDocument, getCurrentUser } from './firebase';
import { setAlertSaga } from './alertSaga';
import firebase from 'firebase';
import { IAlert } from '../reducers/alertReducer';
import { setAlert } from '../actions/alertActions';

function* googleLoginSaga() {
  try {
    console.log(myFirebase.auth().currentUser?.uid);

    yield put(setLoading(true));

    yield call(rsf.auth.signInWithPopup, googleAuth);

    const currentUser: firebase.User | null = getCurrentUser();

    if (currentUser) {
      const snapshot = yield call(getDocument, 'Users', currentUser.uid);
      console.log('Snapshot is = ', JSON.stringify(snapshot.data()));
      if (snapshot.exists) {
        const data = snapshot.data();
        const alert: IAlert = {
          msg: 'User Logged in successfully.',
          alertType: 'success',
        };
        yield put(setUser(data));
        yield put(setLogin(true));
        yield put(setLoading(false));

        yield put(setAlert(alert));
      } else {
        const tempUser: firebaseTypes.IUser = {
          uid: currentUser.uid,
          name: currentUser.displayName,
          type: 'member',
          avatar: currentUser.photoURL,
          email: currentUser.email,
          level: 'Rookie',
        };

        yield call(setDocument, 'Users', currentUser.uid, true, tempUser);

        // console.log('created new user');
        const alert: IAlert = {
          msg: 'New user created',
          alertType: 'success',
        };
        yield put(setAlert(alert));
        yield put(setUser(tempUser));
        yield put(setLogin(true));
        yield put(setLoading(false));
      }
    }
  } catch (error) {
    yield put(setLoading(false));
    const alert: IAlert = {
      msg: error.message,
      alertType: 'danger',
    };
    yield put(setAlert(alert));
  }
}

function* checkCurrentUser() {
  yield delay(3300);

  const currentUser: firebase.User | null = getCurrentUser();
  try {
    if (null !== currentUser) {
      console.log('user exist = ', currentUser.uid);
      const snapshot = yield call(getDocument, 'Users', currentUser.uid);

      const data = snapshot.data();
      yield put(setUser(data));
      yield put(setLogin(true));
      yield put(setLoading(false));
    } else {
      yield put(setLoading(false));
      const alert: IAlert = {
        msg: 'User does not exists.',
        alertType: 'warning',
      };
      yield put(setAlert(alert));
      // console.log('no user');
    }
  } catch (error) {
    yield put(setLoading(false));
    const alert: IAlert = {
      msg: error.message,
      alertType: 'danger',
    };
    yield put(setAlert(alert));
  }
}

function* logoutUserSaga() {
  try {
    yield put(setLoading(true));
    const data = yield call(rsf.auth.signOut);
    console.log(JSON.stringify(data));
    yield put(removeUser());
    yield put(setLogin(false));
    yield put(setLoading(false));
    const alert: IAlert = {
      msg: 'Successfully logged out.',
      alertType: 'success',
    };
    yield put(setAlert(alert));
  } catch (error) {
    yield put(setLoading(false));
    const alert: IAlert = {
      msg: error.message,
      alertType: 'danger',
    };
    yield put(setAlert(alert));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.GOOGLE_SIGN_IN, googleLoginSaga),
    takeLatest(types.CHECK_CURRENT_USER, checkCurrentUser),
    takeLatest(types.LOGOUT_USER, logoutUserSaga),
    //Alert Saga
    takeEvery(types.SET_ALERT, setAlertSaga),
  ]);
}
