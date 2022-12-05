import React, { Component } from 'react';
import UserForm from './UserForm';

const Profile = ({ userData, handleChange }) => {
  console.log(userData);
  return (
    <div className="column">
      <UserForm userData={userData} handleChange={handleChange} />
    </div>
  );
};

export default Profile;
