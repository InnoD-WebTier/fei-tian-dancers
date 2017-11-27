import React, { Component } from 'react';

class Photo extends Component {

  render() {
    return (
      <div className="photo__container">
        <img className="photo" src={this.props.img}/>
        <div className="photo__name">
          {this.props.name}
        </div>
        <div className="photo__description">
          {this.props.description}
        </div>
      </div> 
    );
  }
}

export default Photo;