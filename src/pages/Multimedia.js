import React from 'react';
import PageHeader from '../components/PageHeader.js';
import PageDescription from '../components/PageDescription.js';
import SideMenu from '../components/SideMenu.js';

export default class Multimedia extends React.Component {
    render() {
        const title = 'Multimedia';
        const description = 'Here you can find out more about our past performance pieces:';
        return(
            <div>
                <PageHeader title={title}></PageHeader>
                <PageDescription description={description}></PageDescription>
                <SideMenu></SideMenu>
            </div>
        )
    }
}