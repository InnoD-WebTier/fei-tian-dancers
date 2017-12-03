import React from 'react';
import '../styles/css/page_header.css';

export default class PageHeader extends React.Component {
    render() {
        return(
            <div className="page-header-container">
                <div className="page-header">{this.props.title}</div>
            </div>
        )
    }
}