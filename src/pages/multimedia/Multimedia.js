import React from 'react';
import PageHeader from '../PageHeader.js';
import PageDescription from '../PageDescription.js';
import SideMenu from './SideMenu.js';

export default class Multimedia extends React.Component {
    render() {
        const title = 'Multimedia';
        const description = 'Here you can find out more about our past performance pieces:';
        return(
            <div className='container'>
                <PageHeader title={title}></PageHeader>
                <PageDescription description={description}></PageDescription>
                <SideMenu></SideMenu>
            </div>
        )
    }
}