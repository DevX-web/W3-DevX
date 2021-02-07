import firebase from 'firebase/app';

export const signInWithGoogle = (onSuccess, onError) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      onSuccess(result.user);
    })
    .catch((error) => {
      onError(error);
    });
};

export const signOut = (onSuccess, onError) => {
  firebase.auth().signOut().then(onSuccess).catch(onError);
};
