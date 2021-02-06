import { firebaseApp } from './init';

/**
 * @typedef {{name: string, type: string, severity: string, description: string, location: object}} CrimeDataType
 * @typedef {{user_id: firebase.User.uid, user_name: string, user_avatar: string, message: string, timestamp: Date}} MessageType
 */

/**
 * @callback EventListener - Called everytime a values changes in firebase
 * @param {*} value
 * @returns {void}
 */

/**
 * @callback ErrorCallback - Called when an error occurs
 * @param {Error} error - The error
 * @returns {void}
 */

/**
 * Adds a crime to the firebase realtime database
 * @param {firebase.UserInfo} user - firebase user
 * @param {CrimeDataType} data - The message data
 * @param {function} onSuccess - Success callback, called with the ref of new crime report
 * @param {ErrorCallback} onError - Error callback
 */
export const addCrime = (user, data, onSuccess, onError) => {
  firebaseApp
    .database()
    .ref('crimes')
    .push(data)
    .then(onSuccess)
    .catch(onError);
};

/**
 * Get all the crimes from firebase, and attach an event listener for changes
 * @param {firebase.UserInfo} user - firebase user
 * @param {EventListener} onSuccess
 * @param {ErrorCallback} onError - Error callback
 */
export const getCrimes = (user, onSuccess, onError) => {
  firebaseApp
    .database()
    .ref('crimes')
    .on(
      'value',
      (snapshot) => {
        onSuccess(snapshot.val());
      },
      (err) => onError(err)
    );
};

/**
 * Add a message under a specific crime report.
 * @param {firebase.UserInfo} user - firebase user
 * @param {firebase.Database.Reference} crimeRef
 * @param {string} message - The message text
 * @param {function} onSuccess - Success callback, called with the Ref of new message
 * @param {ErrorCallback} onError - Error callback
 */
export const sendMessage = (user, crimeRef, message, onSuccess, onError) => {
  firebaseApp
    .database()
    .ref('messages')
    .child(crimeRef.toString())
    .push({
      user_id: user.uid,
      user_name: user.displayName,
      user_avatar: user.photoURL,
      message,
      timestamp: Date.now(),
    })
    .then(onSuccess)
    .catch(onError);
};

/**
 * Fetch all messages for a specific crime report
 * @param {firebase.UserInfo} user
 * @param {firebase.Database.Reference} crimeRef
 * @param {EventListener} onSuccess - Event listener, called with the value received from firebase
 * @param {ErrorCallback} onError - Error callback
 */
export const fetchMessages = (user, crimeRef, onSuccess, onError) => {
  firebaseApp
    .database()
    .ref('messages')
    .child(crimeRef.toString())
    .on('value', (snapshot) => {
      onSuccess(snapshot.val());
    })
    .then(onSuccess)
    .catch(onError);
};
