import { useSelector } from 'react-redux';
import React, { Fragment } from 'react';
import { IonToast } from '@ionic/react';
import { AppState } from '../../store/reducers';

const AlertComp: React.FC = () => {
  const { alerts } = useSelector((state: AppState) => state.alertList);
  return (
    <Fragment>
      {alerts.map(
        (alert) =>
          alert.id && (
            <IonToast
              isOpen={true}
              message={alert.msg}
              color={alert.alertType}
            />
          )
      )}
    </Fragment>
  );
};

export default AlertComp;
