import React from 'react';
import '../styles/css/section.css';

export default class Section extends React.Component {
    
    render() {
        const photos = this.props.photos.map((photo) => 
            <img className="section__photos--photo" src={photo}/>
        );  
        return(
            <div className='section'>
                <div className={"section__description " + (this.props.video == null ? "section__description__cropped" : '')}>
                    <div className="section__description--text">
                        <span className="section__title">{this.props.section_title}</span>  <span className="section__category">&#9642; {this.props.section_category}</span><br/>
                        {this.props.section_text}
                    </div>
                    <iframe className={"section__description--video " + (this.props.video == null ? "section__description--video__cropped" : '')} src={this.props.video} frameborder="0" allowFullScreen></iframe>
                </div>
                <div className={"section__photos " + (this.props.video == null ? "section__photos__cropped" : '')}>
                    {photos}
                </div>
            </div>
        )
    }
}