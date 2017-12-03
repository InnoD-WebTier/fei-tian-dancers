import React from 'react';
import '../styles/css/section.css';

export default class Section extends React.Component {
    render() {
        return(
            <div className='section'>
                <div className="section__title">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="underscore"/>
                </div>
                <div className="section__description">
                    <div className="section__description--text">
                        <b>{this.props.section_title}</b><br/>
                        {this.props.section_text}
                    </div>
                    <iframe className="section__description--video" src="https://www.youtube.com/embed/u57WfWusxA4" frameborder="0" allowFullScreen></iframe>
                </div>
                <div className="section__photos">
                    <img className="section__photos--photo" src="https://ftd.berkeley.edu/img/ALL.jpg"/>
                    <img className="section__photos--photo middle" src="https://ftd.berkeley.edu/img/ALL.jpg"/>
                    <img className="section__photos--photo" src="https://ftd.berkeley.edu/img/ALL.jpg"/>
                </div>
            </div>
        )
    }
}