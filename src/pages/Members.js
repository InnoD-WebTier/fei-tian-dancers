import React, { Component } from 'react';
import PhotoGrid from '../components/PhotoGrid.js';
import PageHeader from '../components/PageHeader.js';


class Members extends Component {
    render() {
    	const title = 'Our Team';
        return (
            <div>
            	<PageHeader title={title}></PageHeader>
            	<PhotoGrid/>
            </div>
        );
    }
}

export default Members;