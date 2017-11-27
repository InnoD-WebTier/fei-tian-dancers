import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div>
        <div class="cover">
          <img src="chinatown.jpg" alt=""></img>
        </div>

        <div className="header">
          <h1>ABOUT US</h1>
          <div id="red-underline"></div>
        </div>
        <div class="about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum iure temporibus magnam, fuga totam doloremque. Quam autem, culpa fugiat blanditiis eius ipsa sed, earum dolorem, minima molestias eveniet soluta.
          </p>
        </div>

        <div class="faq">
          <h1>FAQs</h1>
          <div id="red-underline"></div>
        </div>
        <div class="faq-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum iure temporibus magnam, fuga totam doloremque. Quam autem, culpa fugiat blanditiis eius ipsa sed, earum dolorem, minima molestias eveniet soluta.
          </p>
        </div>
        <div class="header">
          <h1>CONTACT US</h1>
          <div id="red-underline"></div>
        </div>
        <div class="about">
          <p>
            If you have any questions or inquiries about our group:
              Email us at <a href="mailto: dance.chinese@gmail.com" target="_blank" rel="noopener noreferrer">dance.chinese@gmail.com</a>
              We will reply as soon as we can. Thank you!
          </p>
        </div>  
      </div>
   );
  }

}

export default Home;

