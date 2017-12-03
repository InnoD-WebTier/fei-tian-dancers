/**
 * Created by kj on 11/6/17.
 */
import React, { Component } from 'react';
import cover from '../assets/cover.png';
import PageHeader from '../components/PageHeader';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img className="cover" src={cover}/>
                <div className="about">
                    <PageHeader title={"About Us"}></PageHeader>
                        <p>Fei Tian Dancers (FTD) is a community of University of California, Berkeley students passionate about dance and dedicated to presenting Chinese culture to the Bay Area.</p>

                        <p>There are 56 ethnic groups in China, each with unique traditions that inspire art and dance. To showcase the complexity, grace, strength, and creativity of Chinese dance, and the diversity of Chinese culture, the FTD performing team incorporates classical, ethnic, and modern Chinese dances into its repertoire and performs throughout the Bay Area, at university events, performing arts venues, schools, festivals, community centers, and special events. FTD began in 2003 as China Dance Theatre (CDT) to not only support dancers in developing their Chinese dance technique but also spread greater awareness of Chinese ethnic cultures. In 2007, CDT was renamed FTD following administrative and structural changes and now has three areas of focus: the FTD performing team, the Beginning Chinese Dance Decal, and youth outreach workshops partnered with the Northern California division of Families with Children from China.</p>

<p>For UC Berkeley students interested with little or no experience with Chinese dance, we encourage you to take our Beginning Chinese Dance Decal offered every spring semester to introduce the fundamentals of Chinese dance. 
For those with more Chinese dance experience, we hold auditions for the FTD performing team at the beginning of every semester. </p>


                </div>
                <div className="join">
                    <PageHeader title={"Join Us"}></PageHeader>
                </div>
                <div className="contact">
                    <PageHeader title={"Contact Us"}></PageHeader>
                </div>
            </div>
        );
    }
}

export default Home;