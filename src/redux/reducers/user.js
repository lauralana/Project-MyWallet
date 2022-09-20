import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: 'laura-mls@hotmail.com',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
