import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React, { Fragment } from 'react';
import DashboardTopBar from '../shared/DashboardTopBar';

const Header: React.FC = () => {
  return (
    <Fragment>
      <IonHeader>
        <DashboardTopBar />

        <IonToolbar className="background-grey ">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile Summary</IonTitle>
        </IonToolbar>
      </IonHeader>
    </Fragment>
  );
};

export default Header;
