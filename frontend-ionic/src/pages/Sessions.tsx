import { IonContent, IonPage } from '@ionic/react';

import React from 'react';
import ExploreContainer from '../components/shared/ExploreContainer';
import './Page.scss';
import HeaderDashboard from '../components/shared/HeaderDashboard';

const Sessions: React.FC = () => {
  return (
    <IonPage>
      <React.Fragment>
        <HeaderDashboard title="Sessions" />

        <IonContent fullscreen>
          <ExploreContainer name="Sessions" />
        </IonContent>
      </React.Fragment>
    </IonPage>
  );
};

export default Sessions;
