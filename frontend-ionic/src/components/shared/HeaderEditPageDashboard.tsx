import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import DashboardTopBar from './DashboardTopBar';

interface IProps {
  title: string;
}

const HeaderEditPageDashboard: React.FC<IProps> = ({ title }) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonHeader>
      <DashboardTopBar />

      <IonToolbar className="background-grey ">
        <IonButtons slot="start" onClick={handleBack}>
          <IonBackButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderEditPageDashboard;
