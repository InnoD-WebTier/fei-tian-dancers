/**
 * Created by kj on 11/6/17.
 */
import React, { Component } from 'react';
import cover from '../assets/cover.jpg';
import group from '../assets/group.jpg';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import mail from '../assets/mail.png';
import PageHeader from '../components/PageHeader';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__header">
          <img src={cover}/>
          <div className="overlay"></div>
          <h2>Fei Tian Dancers</h2>
        </div>
        <div className="about">
          <PageHeader title={"About Us"}></PageHeader>
          <img src={group}/>
          <p>
            Fei Tian Dancers (FTD) is a community of University of California, Berkeley 
            students passionate about dance and dedicated to presenting Chinese culture 
            to the Bay Area.
          </p>
          <p>
            There are 56 ethnic groups in China, each with unique traditions that inspire 
            art and dance. To showcase the complexity, grace, strength, and creativity of 
            Chinese dance, and the diversity of Chinese culture, the FTD performing team 
            incorporates classical, ethnic, and modern Chinese dances into its repertoire 
            and performs throughout the Bay Area, at university events, performing arts 
            venues, schools, festivals, community centers, and special events. FTD began 
            in 2003 as China Dance Theatre (CDT) to not only support dancers in developing 
            their Chinese dance technique but also spread greater awareness of Chinese 
            ethnic cultures. In 2007, CDT was renamed FTD following administrative and 
            structural changes and now has three areas of focus: the FTD performing team, 
            the Beginning Chinese Dance Decal, and youth outreach workshops partnered with 
            the Northern California division of Families with Children from China.
          </p>
          <p>
            For UC Berkeley students interested with little or no experience with Chinese 
            dance, we encourage you to take our Beginning Chinese Dance Decal offered every 
            spring semester to introduce the fundamentals of Chinese dance. 
            For those with more Chinese dance experience, we hold auditions for the FTD 
            performing team at the beginning of every semester.
          </p>
        </div>
        <div className="join">
          <PageHeader title={"Join Us"}></PageHeader>
          <div className="join__section">
            <div className="join__title">FAQs</div>
            <div className="join__subtitle">How much is the club fee?</div>
            <div className="join__text">Club fees are $30. These fees go to paying for costumes and banquet.</div>
            <div className="join__subtitle">What is the time commitment like?</div>
            <div className="join__text">
              Practice times and frequency depend on the choreographer 
              and dancers' schedules. They are typically 3-4 hours a week. We may also offer 
              minipieces, which require less time committment, typically 1-2 hours a week.
            </div>
          </div>
          <br/>
          <div className="join__section">
            <div className="join__title">AUDITIONS</div>
            <div className="join__subtitle">ATTIRE</div>
            <div className="join__text">
              No baggy pants, jeans, or baggy shirts. 
              Bring dance shoes (ballet shoes, jazz shoes, etc.) or your bare feet.
            </div>
            <div className="join__subtitle">THE AUDITION ITSELF</div>
            <div className="join__text">
              Warm-ups are done as a group for the first few minutes. We will be teaching 
              you a short dance sequence, then you will have a chance to perform what you 
              learned. We will be looking for: attention to detail, ability to pick up 
              choreography, performance skills, etc. All returning members will be 
              auditioning as well, so everyone will have an equal chance to be in the piece. 
            </div>
          </div>
        </div>
        <div className="contact">
          <PageHeader title={"Contact Us"}></PageHeader>
          <div className="contact__icons">
            <a href="https://www.facebook.com/pages/Fei-Tian-Dancers/203685086317097">
              <img className="facebook" src={facebook}/>
            </a>
            <a href="http://www.youtube.com/user/FeiTianUCB">
              <img className="youtube" src={youtube}/>
            </a>
            <a href="mailto:dance.chinese@gmail.com">
              <img className="mail" src={mail}/>
            </a>
          </div>
          <div className="contact__text">
            Please email us at <span className="email">dance.chinese@gmail.com</span> if you have any questions or inquiries about our group.
            <br/>
            <br/>
            We will reply as soon as we can. Thank you!
          </div>
        </div>
      </div>
      );
    }
}

export default Home;