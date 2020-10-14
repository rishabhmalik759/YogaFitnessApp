import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React, { Dispatch, Fragment } from 'react';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';
import Header from '../components/profileSummary/Header';
import ProfileInformation from '../components/profileSummary/PersonalInformation';
import '../components/profileSummary/Profile.scss';
import Alert from '../components/shared/Alert';
import { useDispatch } from 'react-redux';
import { IAlertActions, setAlert } from '../store/actions/alertActions';
import { IAlert } from '../store/reducers/alertReducer';
const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <Fragment>
          <ProfileInformation />
        </Fragment>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
