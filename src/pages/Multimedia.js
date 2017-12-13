import React from 'react';
import PageHeader from '../components/PageHeader.js';
import PageDescription from '../components/PageDescription.js';
import SideMenu from '../components/SideMenu.js';
import Section from '../components/Section.js';

export default class Multimedia extends React.Component {
    render() {
        const title = 'Multimedia';
        const description = 'Here you can find out more about our past performance pieces:';
        return(
            <div className="multimedia container">
                <PageHeader title={title}></PageHeader>
                <PageDescription description={description}></PageDescription>
                <div className="content">
                    <SideMenu/>
                    <Section title={"han"} section_title={"Qian Hong"} section_text={"Qian Hong is a Han fan dance that is a more modern style of traditional Chinese dancing. It is performed to a song that is historically well known in Chinese culture showcasing strength and perseverance."}/>
                    <Section title={"han"} section_title={"Qian Hong"} section_text={"Qian Hong is a Han fan dance that is a more modern style of traditional Chinese dancing. It is performed to a song that is historically well known in Chinese culture showcasing strength and perseverance."}/>
                    <div style={{clear: "both"}}/>
                </div>
            </div>
        )
    }
}