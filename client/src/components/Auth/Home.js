import React from 'react';

let Home = (props) => {
  console.log('*** Home Props ***', props);
  return (
    <div>
      <h1>Plate-It</h1>
      <img src={props.profile.picture} alt={'profile'} />
      <h2>Welcome {props.profile.name}</h2>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );
}

export default Home;