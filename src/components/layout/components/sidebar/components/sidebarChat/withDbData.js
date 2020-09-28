import React, { useState, useEffect } from 'react';
import db from 'src/firebase';

const withDbData = (Component) => (props) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    );

    return () => unsubscribe();
  }, []);

  return <Component {...props} rooms={rooms} />;
};

export default withDbData;
