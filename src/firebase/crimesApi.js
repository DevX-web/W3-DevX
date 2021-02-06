import { firebaseApp } from './init';

/**
 * Adds a crime to the firebase realtime database
 * @param {object} user - firebase user
 * @param {object} data - { name, type, severity, location }
 * @param {function} onSuccess - Success callback, called with the crime ref
 * @param {function} onError - Error callback
 */
export const addCrime = (user, data, onSuccess, onError) => {
  firebaseApp
    .database()
    .ref('crimes')
    .push(data)
    .then(onSuccess)
    .catch(onError);
};

export const addMessage = (user, crimeRef, message, onSuccess, onError) => {
  firebaseApp
    .database()
    .ref('messages')
    .child(crimeRef.toString())
    .push({
      user_id: user.uid,
      user_name: user.displayName,
      user_avatar: user.photoURL,
      message,
    })
    .then(onSuccess)
    .catch(onError);
};
