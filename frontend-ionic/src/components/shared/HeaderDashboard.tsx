import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import DashboardTopBar from './DashboardTopBar';

interface IProps {
  title: string;
}

const HeaderDashboard: React.FC<IProps> = ({ title }) => {
  return (
    <IonHeader>
      <DashboardTopBar />

      <IonToolbar className="background-grey ">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderDashboard;
