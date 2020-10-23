//issue
//not redirecting to home after logout or 404
import Menu from './components/shared/Menu';
import Sessions from './pages/Sessions';
import Account from './pages/Account';
import Profile from './pages/Profile';

import Support from './pages/Support';
import Packs from './pages/Packs';
import Home from './pages/Home';
import Edit from './pages/Edit';
import React, { Dispatch, useEffect } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import './App.scss';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { ModalProvider } from './store/contexts/ModalContext';
// import { AppUserProvider } from './store/contexts/AuthContext';

/* Theme variables */
import './theme/variables.scss';
import { useDispatch, useSelector } from 'react-redux';
import { checkCurrentUser, IUserActions } from './store/actions/userActions';
import { AppState } from './store/reducers';
import { IonLoading } from '@ionic/react';
import {
  IAppCurrentActions,
  setLoading,
} from './store/actions/appCurrentActions';
import Alert from './components/shared/Alert';
import EditProfile from './components/edit/EditProfile';

const App: React.FC = () => {
  const { loading, login } = useSelector((state: AppState) => state.appCurrent);

  const userDispatch = useDispatch<Dispatch<IUserActions>>();
  const AppDispatch = useDispatch<Dispatch<IAppCurrentActions>>();

  const _handleAppLoading = () => {
    AppDispatch(setLoading(false));
  };

  useEffect(() => {
    userDispatch(checkCurrentUser());
  }, [userDispatch]);

  return (
    <IonApp className={login ? 'background-light' : 'dark-background'}>
      <IonLoading
        cssClass="my-custom-class"
        isOpen={loading}
        onDidDismiss={_handleAppLoading}
        message={'Please wait...'}
        //duration={20000}
      />
      <Alert />
      <IonReactRouter>
        <IonSplitPane contentId="main" disabled={true}>
          <Menu />

          <IonRouterOutlet id="main">
            <Route
              path="/dashboard/sessions"
              component={Sessions}
              exact
              render={() => (login ? <Sessions /> : <Redirect to="/" />)}
            />
            <Route
              path="/dashboard/profile"
              component={Profile}
              exact
              render={() => (login ? <Profile /> : <Redirect to="/" />)}
            />

            <Route
              path="/dashboard/account"
              component={Account}
              exact
              render={() => (login ? <Account /> : <Redirect to="/" />)}
            />
            <Route
              path="/dashboard/packs"
              component={Packs}
              exact
              render={() => (login ? <Packs /> : <Redirect to="/" />)}
            />
            <Route
              path="/dashboard/support"
              component={Support}
              exact
              render={() => (login ? <Support /> : <Redirect to="/" />)}
            />
            <Route
              path="/dashboard/*/edit"
              component={Edit}
              render={() => (login ? <Edit /> : <Redirect to="/" />)}
            />
            <Route path="/" component={Home} exact />
            {login ? (
              <Redirect from="/" to="/dashboard/sessions" exact />
            ) : (
              <Redirect from="/dashboard/*" to="/" exact />
            )}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
