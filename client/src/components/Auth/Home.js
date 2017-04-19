import React from 'react';

let Home = (props) => {
  return (
    <div>
      <img src={props.profile.picture} alt={'profile'} />
      <h2>{props.profile.name}</h2>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );
}

export default Home;