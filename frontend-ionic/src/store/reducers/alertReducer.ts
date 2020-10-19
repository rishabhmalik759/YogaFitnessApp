import * as types from '../types';

export interface IAlertState {
    alerts:IAlert[];
};

export interface IAlert {
    id?:string;
    msg?:string;
    position?:'bottom' | 'middle' | 'top';
    alertType?:'success' | 'warning' | 'danger';
};

export const initialAlertState: IAlertState ={
  alerts:[
      {
          id:'',
          msg:'',
          alertType:'success',
          
      },
  ]  ,
};

export const alertReducer = (
  state: IAlertState = initialAlertState,
  action: {
    type:
      | types.SET_ALERT
      | types.ADD_ALERT_TO_LIST
      | types.REMOVE_ALERT_FROM_LIST;
    payload?: IAlert;
  }
): IAlertState => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_ALERT_TO_LIST:
      console.log('payload in reducer = ', JSON.stringify(payload));
      if (payload) {
        return { ...state, alerts: [...state.alerts, payload] };
      }
      return state;
    case types.REMOVE_ALERT_FROM_LIST:
      if (payload) {
        const tempAlerts = state.alerts.filter(
          (alert) => alert.id !== payload.id
        );
        return { ...state, alerts: tempAlerts };
      } return state;
    default:
      return state;
  }
};
