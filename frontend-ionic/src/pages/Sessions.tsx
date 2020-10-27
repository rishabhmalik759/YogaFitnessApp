import { IonContent, IonPage } from '@ionic/react';

import React, { Dispatch } from 'react';
import './Page.scss';
import HeaderDashboard from '../components/shared/HeaderDashboard';
import VideoConference from '../components/jitsi/VideoConference';

const Sessions: React.FC = () => {
  return (
    <IonPage>
      <React.Fragment>
        <HeaderDashboard title="Sessions" />
        <IonContent fullscreen>
          <VideoConference />
        </IonContent>
      </React.Fragment>
    </IonPage>
  );
};

export default Sessions;
