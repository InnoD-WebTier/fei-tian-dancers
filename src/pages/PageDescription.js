import React from 'react';
import '../styles/css/page_description.css';

export default class PageDescription extends React.Component {
    render() {
        return(
            <div className='page-description'><p>{this.props.description}</p></div>
        )
    }
}
