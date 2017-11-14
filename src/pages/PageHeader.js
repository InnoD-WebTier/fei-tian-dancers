import React from 'react';
import '../styles/css/page_header.css';

export default class PageHeader extends React.Component {
    render() {
        return(
            <div className='page-header'>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}