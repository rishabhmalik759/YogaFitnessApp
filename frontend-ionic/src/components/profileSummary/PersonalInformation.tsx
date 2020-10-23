import {
  IonBadge,
  IonButtons,
  IonCard,
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPopover,
  IonText,
} from '@ionic/react';
import {
  addCircle,
  archive,
  caretDownCircleOutline,
  caretUpCircleOutline,
  pencil,
} from 'ionicons/icons';

import React, { Dispatch, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IEditActions, setEditPage } from '../../store/actions/editActions';
import { AppState } from '../../store/reducers';
import { editObjects } from '../../pages/Edit';
const PersonalInformation: React.FC = () => {
  const {
    name,
    avatar,
    weight,
    height,
    sex,
    age,
    bmi,
    level,
    country,
  } = useSelector((state: AppState) => state.userState);
  const [showPopover, setShowPopover] = useState<{
    open: boolean;
    event: Event | undefined;
  }>({
    open: false,
    event: undefined,
  });

  const [showCurrentDisorders, setShowCurrentDisorders] = useState(false);
  const [showWorkoutHistory, setShowWorkoutHistory] = useState(false);
  const [showDisordersHistory, setShowDisordersHistory] = useState(false);
  const editDispatch = useDispatch<Dispatch<IEditActions>>();

  const history = useHistory();

  const handleProfileEdit = () => {
    setShowPopover({
      event: undefined,
      open: false,
    });
    editDispatch(setEditPage(editObjects.editProfileObj));
    history.push(editObjects.editProfileObj.uri);
  };
  const handleWorkoutEdit = () => {
    setShowPopover({
      event: undefined,
      open: false,
    });
    editDispatch(setEditPage(editObjects.editWorkoutObj));
    history.push(editObjects.editWorkoutObj.uri);
  };
  React.useEffect(() => {}, [
    name,
    avatar,
    weight,
    height,
    sex,
    age,
    bmi,
    level,
    country,
    editDispatch,
  ]);

  return (
    <Fragment>
      <div className="col-md-8 center">
        <IonCard className="p-0 background-light border-light">
          <div className="profile-background"> </div>
          <div className="card ml-4 profile-photo">
            <img src={avatar} alt="avatar"></img>
          </div>

          <div className="edit-profile-button">
            <IonButtons slot="end">
              <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton
                  size="small"
                  onClick={(e) =>
                    setShowPopover({ open: true, event: e.nativeEvent })
                  }
                >
                  <IonIcon size="small" icon={pencil} />
                </IonFabButton>
              </IonFab>{' '}
            </IonButtons>
          </div>
          <div className="left-align">
            <IonText>
              <h3>{name}</h3>
            </IonText>
            <IonText>
              <p>{level}</p>
            </IonText>
          </div>
          <IonCard className="p-0">
            <IonList className="profile-list p-0">
              <IonItem lines="inset">
                <IonLabel>BMI</IonLabel>
                <IonBadge color="primary">{bmi}</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Age</IonLabel>
                <IonBadge color="primary">{age}</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Height</IonLabel>
                <IonBadge color="primary">{height} CM</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Weight</IonLabel>
                <IonBadge color="primary">{weight} KG</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Sex</IonLabel>
                <IonBadge color="primary">{sex}</IonBadge>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>Country</IonLabel>
                <IonBadge color="primary">{country}</IonBadge>
              </IonItem>
            </IonList>
          </IonCard>
          <div className="left-align mb-2 mt-4">
            <IonText>
              <p className="no-margin">Current Workout Overview</p>
            </IonText>
          </div>
          <IonCard className="mt-0">
            <IonList className="profile-list p-0">
              <IonItem lines="inset">
                <IonLabel>
                  <strong>Workout Overview</strong>
                  <div>Basic stretching and Yoga flows.</div>
                </IonLabel>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>
                  <div>
                    <strong>Next class is on</strong>
                  </div>
                  <div> 10 am 23 October 2020</div>
                </IonLabel>
              </IonItem>
              <IonItem lines="inset">
                <IonLabel>
                  <div>
                    <strong>Alloted Time</strong>
                  </div>
                  <div className="row mb-4">
                    <div className="stick-left">10 am</div>

                    <IonFab vertical="top" horizontal="end" slot="fixed">
                      <IonChip outline={true} color="primary">
                        <IonIcon className="m-0" icon={pencil}></IonIcon>
                      </IonChip>
                    </IonFab>
                  </div>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCard>

          <IonCard className="mt-4">
            <IonList className="profile-list p-0 wrapping-list">
              <IonListHeader
                onClick={() => setShowCurrentDisorders(!showCurrentDisorders)}
              >
                <IonLabel className="left-align-no-margin">
                  <p>Current Disorders</p>
                </IonLabel>
                <IonIcon
                  color="primary"
                  className="mr-3"
                  size="large"
                  icon={
                    showCurrentDisorders
                      ? caretUpCircleOutline
                      : caretDownCircleOutline
                  }
                ></IonIcon>
              </IonListHeader>
              <div
                className={
                  showCurrentDisorders ? `expand-wrapper` : 'collapsed'
                }
              >
                <IonItem lines="inset">
                  <IonLabel className="text-wrap">
                    <div>
                      <div>
                        <strong>Back Pain</strong>
                        <IonFab vertical="top" horizontal="end" slot="fixed">
                          <IonChip outline={true} color="primary">
                            <IonIcon className="m-0" icon={archive}></IonIcon>
                          </IonChip>
                          <IonChip outline={true} color="primary">
                            <IonIcon className="m-0" icon={pencil}></IonIcon>
                          </IonChip>
                        </IonFab>
                      </div>
                      <IonText color="primary">Type</IonText>
                      <div>Body Pain</div>
                    </div>
                    <div>
                      <IonText color="primary">Description</IonText>
                      <div>
                        Pain in lower back due to surgery SOMETHING something
                        something
                      </div>
                    </div>
                    <div>
                      <IonText color="primary">Duration</IonText>
                      <div>2 Years</div>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel className="text-wrap">
                    <div>
                      <div>
                        <strong>Shoulder Pain</strong>
                        <IonFab vertical="top" horizontal="end" slot="fixed">
                          <IonChip outline={true} color="primary">
                            <IonIcon className="m-0" icon={archive}></IonIcon>
                          </IonChip>
                          <IonChip outline={true} color="primary">
                            <IonIcon className="m-0" icon={pencil}></IonIcon>
                          </IonChip>
                        </IonFab>
                      </div>
                      <IonText color="primary">Type</IonText>
                      <div>Body Pain</div>
                    </div>
                    <div>
                      <IonText color="primary">Description</IonText>
                      <div>Bike Accident</div>
                    </div>
                    <div>
                      <IonText color="primary">Duration</IonText>
                      <div>6 Months</div>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel className="text-wrap">
                    <div>
                      <div>
                        <IonChip outline={true} color="primary">
                          Add Disorder
                          <IonIcon icon={addCircle}></IonIcon>
                        </IonChip>
                      </div>
                    </div>
                  </IonLabel>
                </IonItem>
              </div>
            </IonList>
          </IonCard>
          <IonCard className="mt-4">
            <IonList className="profile-list p-0 wrapping-list">
              <IonListHeader
                onClick={() => setShowDisordersHistory(!showDisordersHistory)}
              >
                <IonLabel className="left-align-no-margin">
                  <p>Disorders History</p>
                </IonLabel>
                <IonIcon
                  color="primary"
                  className="mr-3"
                  size="large"
                  icon={
                    showDisordersHistory
                      ? caretUpCircleOutline
                      : caretDownCircleOutline
                  }
                ></IonIcon>
              </IonListHeader>
              <div
                className={
                  showDisordersHistory ? `expand-wrapper` : 'collapsed'
                }
              >
                <IonItem lines="inset">
                  <IonLabel className="text-wrap">
                    <div>
                      <div>
                        <strong>Back Pain</strong>
                      </div>
                      <IonText color="primary">Type</IonText>
                      <div>Body Pain</div>
                    </div>
                    <div>
                      <IonText color="primary">Description</IonText>
                      <div>
                        Pain in lower back due to surgery SOMETHING something
                        something
                      </div>
                    </div>
                    <div>
                      <IonText color="primary">Duration</IonText>
                      <div>2 Years</div>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel className="text-wrap">
                    <div>
                      <div>
                        <strong>Shoulder Pain</strong>
                      </div>
                      <IonText color="primary">Type</IonText>
                      <div>Body Pain</div>
                    </div>
                    <div>
                      <IonText color="primary">Description</IonText>
                      <div>Bike Accident</div>
                    </div>
                    <div>
                      <IonText color="primary">Duration</IonText>
                      <div>6 Months</div>
                    </div>
                  </IonLabel>
                </IonItem>
              </div>
            </IonList>
          </IonCard>
          <IonCard className="mt-4">
            <IonList className="profile-list p-0">
              <IonListHeader
                onClick={() => setShowWorkoutHistory(!showWorkoutHistory)}
              >
                <IonLabel className="left-align-no-margin">
                  <p>Workout History</p>
                </IonLabel>
                <IonIcon
                  color="primary"
                  className="mr-3"
                  size="large"
                  icon={
                    showWorkoutHistory
                      ? caretUpCircleOutline
                      : caretDownCircleOutline
                  }
                ></IonIcon>
              </IonListHeader>
              <div
                className={showWorkoutHistory ? 'expand-wrapper' : 'collapsed'}
              >
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Next class is on</strong>
                    </div>
                    <div> 10 am 23 October 2020</div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <div>
                      <strong>Alloted Time</strong>
                    </div>
                    <div className="row mb-4">
                      <div className="stick-left">10 am</div>

                      <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton size="small">
                          <IonIcon size="small" icon={pencil} />
                        </IonFabButton>
                      </IonFab>
                    </div>
                  </IonLabel>
                </IonItem>
                <IonItem lines="inset">
                  <IonLabel>
                    <strong>Workout Overview</strong>
                    <div>Basic stretching and Yoga flows.</div>
                  </IonLabel>
                </IonItem>
              </div>
            </IonList>
          </IonCard>

          <div className="col text-dark">
            <IonPopover
              isOpen={showPopover.open}
              event={showPopover.event}
              onDidDismiss={(e) =>
                setShowPopover({ open: false, event: undefined })
              }
            >
              <IonList>
                <IonListHeader>
                  <strong>Profile Options</strong>
                </IonListHeader>
                <IonItem button onClick={handleProfileEdit}>
                  Complete Profile
                </IonItem>
                <IonItem button onClick={handleWorkoutEdit}>
                  Add Disorder
                </IonItem>
                <IonItem button>Edit Profile</IonItem>
                <IonItem
                  lines="none"
                  detail={false}
                  button
                  onClick={() =>
                    setShowPopover({ open: false, event: undefined })
                  }
                >
                  Close
                </IonItem>
              </IonList>
            </IonPopover>
          </div>
        </IonCard>
      </div>
    </Fragment>
  );
};

export default PersonalInformation;
