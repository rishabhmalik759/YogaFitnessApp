import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React from 'react';
import { useHistory } from 'react-router';
import DashboardTopBar from '../shared/DashboardTopBar';
import { IEditPage } from './edit';

const EditWorkout: React.FC = () => {
  const history = useHistory();

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
          <IonTitle>Edit Workout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h5>Edit Workout</h5>
      </IonContent>
    </React.Fragment>
  );
};

export const editWorkoutObj: IEditPage = {
  name: 'EDIT_WORKOUT',
  uri: '/dashboard/workout/edit',
};
export default EditWorkout;
