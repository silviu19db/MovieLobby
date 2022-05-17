import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='title-container'>
          <h3 className='title'>{this.props.title}</h3>
      </div>
    )
  }
}
