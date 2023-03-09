import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchUser from '../../gateway/user';
import './user.scss';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetchUser(userId).then(fetchedUserData => setUserData(fetchedUserData));
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { avatar_url, location, name } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
