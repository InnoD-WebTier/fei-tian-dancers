import React from 'react';
import PageHeader from '../components/PageHeader.js';
import PageDescription from '../components/PageDescription.js';
import SideMenu from '../components/SideMenu.js';
import MediaCategory from '../components/MediaCategory.js';
import Section from '../components/Section.js';
import ReactDOM from 'react-dom';
import mediaPhotos from '../content/MediaContent.js';
import scrollToComponent from 'react-scroll-to-component';

export default class Multimedia extends React.Component {
    callback = (category, number) => {
        scrollToComponent(this.refs[category], { offset: -64, align: 'top', duration: 500, ease:'inCirc'});
    }

    render() {
        const title = 'Multimedia';
        const description = 'Here you can find out more about our past performance pieces:';
        return(
            <div className="multimedia container">
                <SideMenu callbackFromParent={this.callback} />
                <PageHeader title={title}></PageHeader>
                <PageDescription description={description}></PageDescription>
                <div className="content">
                    <MediaCategory ref="han" title="han" />
                    <Section 
                        section_title="Hues" 
                        section_category="Han"
                        section_text="Adapted by Ellen Qi and Bethany Li"
                        photos = {mediaPhotos['hues']}
                        video = "https://www.youtube.com/embed/u57WfWusxA4"
                    />

                    <Section 
                        section_title="Qian Hong" 
                        section_category="Han"
                        section_text="Qian Hong is a Han fan dance that is a more modern style of traditional Chinese dancing. It is performed to a song that is historically well known in Chinese culture showcasing strength and perseverance."
                        photos = {mediaPhotos['qian']}
                    />

                    <Section 
                        section_title="Murmurs of Spring" 
                        section_category="Han"
                        section_text="Spring's warm breezes and light rains awaken delicate flower buds. In the Chinese culture, the flower blooming symbolizes growth, hope, and fulfillment of prosperous beginnings into our lives. Dancers imitate the sprouts as they determinedly push out of the ground and blossom into beautiful flowers."
                        photos = {mediaPhotos['murmurs']}
                    />

                    <MediaCategory ref="li" title="li" />
                    <Section 
                        section_title="Silhouette of Li" 
                        section_category="Li"
                        section_text="Silhouette of Li is a straw hat (douli) piece from the Li minority living on the Hainan Island in Southern China. This dance expresses gratitude and appreciation fot the rain that nourishes the land, allowing life to flourish in the beautiful, subtropical environment of Hainan Island. Adapted by Anna Liu and Mengyao Xu."
                        photos = {mediaPhotos['silhouette']}
                        video = "https://www.youtube.com/embed/8H6QMQ4xSvk"
                    />

                    <MediaCategory ref="mongolian" title="mongolian" />
                    <Section 
                        section_title="Blessings from the Heart" 
                        section_category="Mongolian"
                        section_text="This is a a warm, welcoming piece in which the dancers give their blessing, each in her own way, to the audience. It is an opportunity to share happy experiences through dance. Adapted by Ellen Qi and Robyn Zhang."
                        photos = {mediaPhotos['blessings']}
                        video = "https://www.youtube.com/embed/emwfkRT9n1c"
                    />

                    <MediaCategory ref="contemporary" title="contemporary" />
                    <Section 
                        section_title="Sword Lily" 
                        section_category="Contemporary"
                        section_text="This dance is characterized by swift, flowing, tenacious movements of the sword and body contrasted with crisp, sharp standing positions. The dancers' moves are executed with strength and speed but also with elegance, beauty, and grace. Adapted by Ellen Qi and Emma Levine."
                        photos = {mediaPhotos['sword']}
                        video = "https://www.youtube.com/embed/QwYvcRkDLzk"
                    />

                    <MediaCategory ref="uyhgur" title="uyhgur" />
                    <Section 
                        section_title="Red Flowers" 
                        section_category="Uyhgur"
                        section_text="Red Flowers is a Uyghur dance piece. Uyghurs, from the Turkic ethnic group,live predominately in the Xinjiang Uygur Autonomous Region located in Northwest China. The typicalposture is a tilted head, thrust chest and erect waist, demonstrating their bravery, confidence, andopenness. This dance expresses the idea that a woman is like a red flower, full of energy and youth, making her so irresistible."
                        photos = {mediaPhotos['red_flowers']}
                        video = "https://www.youtube.com/embed/HXEeBuycY1w"
                    />

                    <MediaCategory ref="tibetan" title="tibetan" />
                    <Section 
                        section_title="Kang Ding Love Song" 
                        section_category="Tibetan"
                        section_text="Kang Ding Love Song is a popular Chinese folk song showcasing the beauty of Tibetan girls and the unique landscape of the Tibetan frontier. In this dance, Tibetan ladies show off their lively character and playful spirit as they fight over a scarf, the token of a young man's heart, in their search for love."
                        photos = {mediaPhotos['kang']}
                    />

                    <div style={{clear: "both"}}/>
                </div>
            </div>
        )
    }
}