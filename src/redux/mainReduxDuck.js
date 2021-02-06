import initialState from './initialState';

const SET_FIREBASE_USER = 'SET_FIREBASE_USER';
const NUKE_FIREBASE_USER = 'NUKE_FIREBASE_USER';

export const setFirebaseUser = (user) => ({
  type: SET_FIREBASE_USER,
  firebaseUser: user,
});

export const nukeFirebaseUser = () => ({
  type: NUKE_FIREBASE_USER,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIREBASE_USER:
      return {
        ...state,
        firebaseUser: action.firebaseUser,
      };
    case NUKE_FIREBASE_USER:
      return {
        firebaseUser: null,
      };
    default:
      return state;
  }
};

export default reducer;
