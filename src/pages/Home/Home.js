import { Button } from '@geist-ui/react';
import { firebaseApp } from '../../firebase/init';
import { MapContainer } from '../../components';

function Home() {
  const onSignOut = () => {
    firebaseApp.auth().signOut();
  };

  return (
    <div>
      <div className="authentication-switch">
        <Button type="success-light" onClick={onSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Home;
