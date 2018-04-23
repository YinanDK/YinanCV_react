import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>
          Hi! I'm Joe. I'm a full stack software developer based in Raleigh, North Carolina.</CenteredHeader> 
          
          <p>After working as a producer in the video game industry for 15 years, I decided to to make a career transition into full stack
          development so I could follow my dream and return to my computer science roots. At the same time, my wife, son, and I uprooted
          ourselves and moved to North Carolina after spending the last six years living on the West Coast.</p>
          
          <p>
          This website is a place where I can showcase my skills and growing experience. Please take a look around and contact me if you have
          any questions. Thank you for visiting!
          </p>

      </div>
    );
  }
}

export default Home;
