// Components
import React from 'react';
import PageHeader from '../PageHeader';
import PageDescription from '../PageDescription';
import SideMenu from './SideMenu';
import Performance from './Performance';

// Styles
import '../../styles/css/multimedia.css';

export default class Multimedia extends React.Component {
    render() {
        const title = 'Multimedia';
        const description = 'Here you can find out more about our past performance pieces:';
        return(
            <div>
                <PageHeader title={title}></PageHeader>
                <PageDescription description={description}></PageDescription>
                <div className='page-container'>
                    <SideMenu></SideMenu>
                    <Performance></Performance>
                </div>
            </div>
        )
    }
}