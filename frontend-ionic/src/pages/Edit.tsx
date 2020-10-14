import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import DashboardTopBar from '../components/shared/DashboardTopBar';
import React from 'react';
import { useParams } from 'react-router';
import EditProfile, { editProfileObj } from '../components/edit/EditProfile';
import EditWorkout, { editWorkoutObj } from '../components/edit/EditWorkout';
import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';
//   import { useDispatch } from 'react-redux';
//   import { IUserActions, logoutUser } from '../store/actions/userActions';

// const page1: IEditPage = {
//   pageName: 'Edit Profile',
//   component: EditProfile,
//   route: '/dashboard/profile/edit',
// };

// const page2: IEditPage = {
//   pageName: 'Edit Workout',
//   component: EditWorkout,
//   route: '/dashboard/workout/edit',
// };

const Edit: React.FC = () => {
  const { name } = useSelector((state: AppState) => state.editPage);

  return (
    <IonPage>
      {name === editProfileObj.name && <EditProfile />}
      {name === editWorkoutObj.name && <EditWorkout />}

      {/* <page2.component /> */}
    </IonPage>
  );
};
export const editObjects = { editProfileObj, editWorkoutObj };

export default Edit;
