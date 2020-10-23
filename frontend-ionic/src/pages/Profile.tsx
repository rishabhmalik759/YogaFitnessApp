import { IonContent, IonPage } from '@ionic/react';

import React, { Fragment, useEffect } from 'react';
import './Page.scss';
import ProfileInformation from '../components/profileSummary/PersonalInformation';
import '../components/profileSummary/Profile.scss';
import HeaderDashboard from '../components/shared/HeaderDashboard';

const Profile: React.FC = () => {
  useEffect(() => {
    return () => {
      console.log('cleaned up');
    };
  }, []);
  return (
    <IonPage>
      <HeaderDashboard title="Profile Summary" />

      <IonContent fullscreen>
        <ProfileInformation />
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Profile);
