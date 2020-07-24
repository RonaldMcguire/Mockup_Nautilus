import React, { Component } from 'react';
import matches from '../assets/matches.png';
import '../components/Channel.css'



export default class Channel extends Component {
render(){
  return (
    <div className= "Channel">
      <div className = "landing-map">
        <img src={matches} alt = "matches" />
        <div className = "Landing-page">
          <h2>Issue ???</h2>
          <h1>Catalysts</h1>
          <h3>Agents of change</h3>
          <h3>Read more</h3>


    </div>
  );
}
}

