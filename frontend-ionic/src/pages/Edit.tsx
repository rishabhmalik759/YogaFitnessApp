import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBackCircleOutline } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import DashboardTopBar from "../components/shared/DashboardTopBar";
import React from "react";
import { useParams } from "react-router";
//   import { useDispatch } from 'react-redux';
//   import { IUserActions, logoutUser } from '../store/actions/userActions';

export interface IEdit {
  route: string;
  component: string;
}

const Edit: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <DashboardTopBar />
        <IonToolbar>
          <IonButtons slot="start" onClick={handleBack}>
            <IonBackButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div>Something</div>
      </IonContent>
    </IonPage>
  );
};

export default Edit;
