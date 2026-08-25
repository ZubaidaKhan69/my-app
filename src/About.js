import React from 'react';

function About() {
  return (
    <section className="container about-container">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food and 
          classic cocktails in a lively but casual environment. The restaurant features 
          a locally-sourced menu with daily specials created by co-owners Adrian and Mario.
        </p>
      </div>
      <div className="about-images">
        <div className="img-box img-back"></div>
        <div className="img-box img-front"></div>
      </div>
    </section>
  );
}

export default About;