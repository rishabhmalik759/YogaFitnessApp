import {
  IonButton,
  IonCard,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppState } from '../../store/reducers';
import { IEditPage } from './edit';
import './Edit.scss';
import { editProfileOptions } from './EditProfileOptions';
import HeaderEditPageDashboard from '../shared/HeaderEditPageDashboard';
import { validate } from '../shared/Validate';
import { IAlertActions, setAlert } from '../../store/actions/alertActions';
import { IAlert } from '../../store/reducers/alertReducer';

const EditProfile: React.FC = () => {
  const alertDispatch = useDispatch<Dispatch<IAlertActions>>();

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

  const [error, setError] = useState({
    name: false,
    avatar: false,
    email: false,
    height: false,
  });

  const [allowSubmit, setAllowSubmit] = useState(false);

  const handleError = () => {
    if (error.name || error.email || error.height || error.avatar) {
      return true;
    }
    return false;
  };

  const handleEdit = (e: any) => {
    setEditState({ ...editState, [e.target.name]: e.target.value });
    // const validated = validate(e.target.name, e.target.value);
    // setError({ ...error, [e.target.name]: validated });
    // handleError();
  };

  const handleSubmit = () => {
    const { name, email, height } = editState;
    const validateName = validate('name', name);
    setError({ ...error, name: validateName });
    // setError({ ...error, email: validate('email', email) });
    // setError({ ...error, height: validate('height', height) });
    const validated = handleError();

    if (validated === true) {
      const alert: IAlert = {
        msg: '*error in form fields',
        alertType: 'danger',
      };
      alertDispatch(setAlert(alert));
    }
    console.log('Submit data = ', editState);
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <React.Fragment>
      <HeaderEditPageDashboard title="Edit Profile" />

      <IonContent fullscreen>
        <div className="col-md-8 center">
          <IonCard className="p-0 background-light border-light">
            <form style={{ padding: 10 }} className="edit-form">
              <IonItem className={error.name ? 'validation-error' : ''}>
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
              <IonItem className={error.height ? 'validation-error' : ''}>
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
              <IonItem className={error.email ? 'validation-error' : ''}>
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

// const validate = (name: string, value: any) => {
//   let validator: boolean = false;

//   switch (name) {
//     case 'name':
//       validator = validateName(value);
//       break;
//     case 'avatar':
//       break;
//     case 'email':
//       validator = validateEmail(value);
//       break;
//     case 'height':
//       validator = validateHeight(value);
//       break;
//     default:
//       break;
//   }

//   return validator;
// };
// const validateName = (value: string) => {
//   if (
//     !value.match(
//       /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
//     )
//   ) {
//     setError({ ...error, name: true });
//     return true;
//   } else setError({ ...error, name: false });

//   return false;
// };
// const validateEmail = (value: string) => {
//   if (
//     !value.match(
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     )
//   ) {
//     setError({ ...error, email: true });
//     return true;
//   } else setError({ ...error, email: false });
//   return false;
// };
// const validateHeight = (value: number) => {
//   if (value < 135 || value > 215) {
//     setError({ ...error, height: true });
//     return true;
//   } else setError({ ...error, height: false });

//   return false;
// };
