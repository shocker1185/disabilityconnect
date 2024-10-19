import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebaseConfig';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userDoc = await firestore.collection('users').doc(userId).get();
      if (userDoc.exists) {
        setUserData(userDoc.data());
      }
    };
    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
