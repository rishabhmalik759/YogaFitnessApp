import { IonToolbar } from '@ionic/react';
import React from 'react';

const DashboardTopBar: React.FC = () => {
  return (
    <IonToolbar className="dark-background">
      <div className="center">
        {' '}
        <img
          className="logo center"
          alt="MYogi Logo"
          src="/assets/images/logoWhite.png"
        ></img>
      </div>

      {/* <h5 className="text-light ml-2 center">MYOGI</h5> */}
    </IonToolbar>
  );
};

export default DashboardTopBar;
