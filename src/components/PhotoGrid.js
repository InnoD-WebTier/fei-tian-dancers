import React, { Component } from 'react';
import Photo from './Photo.js';
import Anya from '../assets/profiles/AnyaFang.png';
import Irene from '../assets/profiles/IreneLee.png';
import Jarita from '../assets/profiles/JaritaLee.png';
import Aileen from '../assets/profiles/AileenLuo.png';
import Emily from '../assets/profiles/EmilyTang.png';
import Fluorine from '../assets/profiles/FluorinePascal.png';
import Chelsea from '../assets/profiles/ChelseaYim.png';
import Jessica from '../assets/profiles/JessicaYu.png'; 


const urls = [
  {
    img: Anya,
    name: "Anya Fang",
    description: "Publicity Coordinator",
    key: 1
  },
  {
    img: Irene,
    name: "Irene Lee",
    description: "External Head Coordinator and Finance Coordinator",
    key: 2
  },
  {
    img: Jarita,
    name: "Jarita Lee",
    description: "Internal Head Coordinator",
    key: 3
  },
  {
    img: Aileen,
    name: "Aileen Luo",
    description: "Showcase Coordinator",
    key: 4
  },
  {
    img: Emily,
    name: "Emily Tang",
    description: "Minipiece Choreo-Showcase Coordinator",
    key: 5
  },
  {
    img: Fluorine,
    name: "Fluorine Pascal ",
    description: "Mainpiece Choreo",
    key: 6
  },
  {
    img: Chelsea,
    name: "Chelsea Yim",
    description: "Minipiece Choreo",
    key: 7
  },
  {
    img: Jessica,
    name: "Jessica Yu",
    description: "Histosocial",
    key: 8
  },

]

class PhotoGrid extends Component {

  render() {
    const photos = urls.map((obj) => 
      (
        <Photo key={obj.key} img={obj.img} name={obj.name} description={obj.description} />
      )
    );

    return (
        <div className="photogrid">
          {photos}
        </div>
    );
  }
}

export default PhotoGrid;