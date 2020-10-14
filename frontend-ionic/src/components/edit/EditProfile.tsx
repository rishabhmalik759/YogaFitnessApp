import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppState } from '../../store/reducers';
import DashboardTopBar from '../shared/DashboardTopBar';
import { IEditPage } from './edit';

const EditProfile: React.FC = () => {
  const history = useHistory();

  const {
    name,
    avatar,
    email,
    weight,
    height,
    sex,
    age,
    country,
  } = useSelector((state: AppState) => state.userState);
  const [editState, setEditState] = useState({
    name: name,
    avatar: avatar,
    email: email,
    weight: weight,
    height: height,
    sex: sex,
    age: age,
    country: country,
  });
  const {} = editState;

  const handleEdit = (e: any) => {
    setEditState({ ...editState, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    history.goBack();
  };
  return (
    <React.Fragment>
      <IonHeader>
        <DashboardTopBar />
        <IonToolbar>
          <IonButtons slot="start" onClick={handleBack}>
            <IonBackButton />
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h5>Edit Profile</h5>
      </IonContent>
    </React.Fragment>
  );
};
export const editProfileObj: IEditPage = {
  name: 'EDIT_PROFILE',
  uri: '/dashboard/profile/edit',
};
export default EditProfile;
