import { IonContent, IonPage } from '@ionic/react';

import React, { Fragment } from 'react';
import './Page.scss';
import Header from '../components/profileSummary/Header';
import ProfileInformation from '../components/profileSummary/PersonalInformation';
import '../components/profileSummary/Profile.scss';
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
