import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector((state) => state.user.value);
    const themaColor = useSelector((state) => state.thema.value);
  return (
    <div style= {{color:themaColor}}>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age} </p>
        <p>Email:{user.email} </p>
    </div>
  );
}

export default Profile