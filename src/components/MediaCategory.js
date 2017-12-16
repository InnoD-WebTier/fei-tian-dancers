import React from 'react';
import '../styles/css/category.css';

export default class MediaCategory extends React.Component {
  render() {
    return(
      <div className='category'>
        <div className="category__title">
          <div className="title">
            {this.props.title}
          </div>
          <div className="underscore"/>
        </div>
      </div>
    )
  }
}