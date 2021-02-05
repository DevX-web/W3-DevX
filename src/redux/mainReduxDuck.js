import initialState from './initialState';

const SET_FIREBASE_USER = 'SET_FIREBASE_USER';

export const setFirebaseUser = (user) => ({
  type: SET_FIREBASE_USER,
  firebaseUser: user,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIREBASE_USER:
      return {
        ...state,
        firebaseUser: action.firebaseUser,
      };

    default:
      return state;
  }
};

export default reducer;
