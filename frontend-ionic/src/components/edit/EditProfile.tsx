import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppState } from '../../store/reducers';
import DashboardTopBar from '../shared/DashboardTopBar';
import { IEditPage } from './edit';
import './Edit.scss';
import { editProfileOptions } from './EditProfileOptions';

const EditProfile: React.FC = () => {
  const history = useHistory();

  const {
    name,
    avatar,
    email,
    weight,
    height,
    sex,
    age,
    country,
  } = useSelector((state: AppState) => state.userState);
  const [editState, setEditState] = useState({
    name: name,
    avatar: avatar,
    email: email,
    weight: weight,
    height: height,
    sex: sex,
    age: age,
    country: country,
  });

  const handleEdit = (e: any) => {
    setEditState({ ...editState, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = () => {
    console.log('Submit data = ', editState);
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <React.Fragment>
      <IonHeader>
        <DashboardTopBar />
        <IonToolbar>
          <IonButtons slot="start" onClick={handleBack}>
            <IonBackButton />
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="col-md-8 center">
          <IonCard className="p-0 background-light border-light">
            <form style={{ padding: 10 }} className="edit-form">
              <IonItem className="validation-error">
                <IonLabel color="primary" position="stacked">
                  name
                </IonLabel>
                <IonInput
                  value={editState.name}
                  onIonChange={handleEdit}
                  name="name"
                  pattern="[0-9]"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel color="primary" position="stacked">
                  Age
                </IonLabel>
                <IonSelect
                  interface="popover"
                  name="age"
                  onIonChange={handleEdit}
                >
                  {editProfileOptions.ageOptions.map((age) => (
                    <IonSelectOption key={age} value={age}>
                      {age}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel color="primary" position="stacked">
                  Weight (kgs)
                </IonLabel>
                <IonSelect
                  interface="popover"
                  name="weight"
                  onIonChange={handleEdit}
                >
                  {editProfileOptions.weightOptions.map((weight) => (
                    <IonSelectOption key={weight} value={weight}>
                      {weight}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel color="primary" position="stacked">
                  Sex
                </IonLabel>
                <IonSelect
                  interface="popover"
                  name="sex"
                  onIonChange={handleEdit}
                >
                  {editProfileOptions.sexOptions.map((sex) => (
                    <IonSelectOption key={sex} value={sex}>
                      {sex}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel color="primary" position="stacked">
                  Country
                </IonLabel>
                <IonSelect
                  interface="popover"
                  name="country"
                  onIonChange={handleEdit}
                >
                  {editProfileOptions.countryOptions.map((country) => (
                    <IonSelectOption key={country} value={country}>
                      {country}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel color="primary" position="stacked">
                  Height (cm)
                </IonLabel>
                <IonInput
                  value={editState.height}
                  onIonChange={handleEdit}
                  name="height"
                  pattern="[0-9]"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel color="primary" position="stacked">
                  Email
                </IonLabel>
                <IonInput
                  value={editState.email}
                  onIonChange={handleEdit}
                  name="email"
                  pattern="[0-9]"
                ></IonInput>
              </IonItem>
              <div className="mt-4">
                <IonButton color="danger" onClick={handleBack}>
                  Cancel
                </IonButton>
                <IonButton onClick={handleSubmit}> Submit</IonButton>
              </div>
            </form>
          </IonCard>
        </div>
      </IonContent>
    </React.Fragment>
  );
};
export const editProfileObj: IEditPage = {
  name: 'EDIT_PROFILE',
  uri: '/dashboard/profile/edit',
};
export default EditProfile;
