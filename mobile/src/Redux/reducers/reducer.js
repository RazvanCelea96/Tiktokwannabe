import {ActionTypes} from '../../AppActions';
import {DashboardActionTypes} from './actions';

const initialState = {
  loading: true,
  error_occured: false,
  data: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case DashboardActionTypes.LOAD_DATA:
      return {...state, loading: true, error_occcured: false};

    case DashboardActionTypes.DATA_LOADED:
      return {...state, data: payload, loading: false};

    case DashboardActionTypes.LOAD_DATA_FAILED:
      return {...state, loading: false, error_occured: true};

    case ActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
