import React, { Component } from 'react';
import '../styles/css/PicGrid.css';
import showCoor from '../pictures/AileenLuo.jpg';
import pubCoor from '../pictures/AnyaFang.jpg';
import miniChor from '../pictures/ChelseaYim.jpg';
import miniShow from '../pictures/EmilyTang.jpg';
import mainChor from '../pictures/FluorinePascal.jpg';
import exHead from '../pictures/IreneLee.jpg';
import intHead from '../pictures/JaritaLee.jpg';
import histo from '../pictures/JessicaYu.jpg';

class PicGrid extends Component {

  render() {
    return (
      <div className="pic-wrap">
        <div className="pic">
          <img src={showCoor} />
          <div className="desc-name">
          Aileen Luo
          </div>
        </div>
        <div className="pic">
           <img src={pubCoor} />
           <div className="desc-name">
            Anya Fang
           </div>
        </div>
        <div className="pic">
          <div className="desc-name">
          <img src={miniChor} />
          Chelsea Yim
          </div>
        </div>
        <div className="pic">
           <img src={miniShow} />
           <div className="desc-name">
             Emily Tang
           </div>
        </div>
        <div className="pic">
           <img src={mainChor} />
            <div className="desc-name">
            Fluorine Pascal
           </div>
        </div>
        <div className="pic">
           <img src={exHead} />
           <div className="desc-name">
           Irene Lee
           </div>
        </div>
        <div className="pic">
           <img src={intHead} />
            <div className="desc-name">
            Jarita Lee
           </div>
        </div>
        <div className="pic">
           <img src={histo} />
           <div className="desc-name">
           Jessica Yu
           </div>
        </div>
      </div>
    );
  }
}

export default PicGrid;