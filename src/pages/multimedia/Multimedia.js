// Components
import React from 'react';
import PageHeader from '../PageHeader';
import PageDescription from '../PageDescription';
import SideMenu from './SideMenu';
import Piece from './Piece';

// Styles
import '../../styles/css/multimedia.css';

// load media
import test_video from '../../assets/multimedia/test/video.png';
import test_img_1 from '../../assets/multimedia/test/pic1.png';
import test_img_2 from '../../assets/multimedia/test/pic2.png';
import test_img_3 from '../../assets/multimedia/test/pic3.png';

// data
const pieces = [
    {
        name: 'han',
        title: 'Qian Hong',
        description: 'Qian Hong is a Han fan dance that is a more modern style of traditional Chinese dancing. It is performed to a song that is historically well known in Chinese culture showcasing strength and perseverance.',
        video: test_video,
        images: [test_img_1, test_img_2, test_img_3]
    },
    {
        name: 'mongolian',
        title: 'Blessings from the Heart',
        description: 'This is a warm, welcoming piece in which the dancers give their blessing, each in her own way, to the audience. It is an opportunity to share happy experiences through dance\n. Adapted by Ellen Qi and Robyn Zhang.',
        video: test_video,
        images: [test_img_1, test_img_2, test_img_3]
    }
]

export default class Multimedia extends React.Component {
    render() {
        const title = 'Multimedia';
        const description = 'Here you can find out more about our past performance pieces:';
        const listPieces = pieces.map((piece, i) => <li key={i} className='list_pieces'><Piece name={piece.name} title={piece.title} description={piece.description} video={piece.video} images={piece.images} /></li>)
        return(
            <div>
                <PageHeader title={title} />
                <PageDescription description={description} />
                <div className='multimedia-page-container'>
                    <SideMenu />
                    <ul>
                        {listPieces}
                    </ul>
                </div>
            </div>
        )
    }
}