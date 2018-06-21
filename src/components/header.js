import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className='aae-section__container header'>
        <img id='logo-image' src={`../../style/images/${this.props.logoImage}`}/>
        <div className='title'> {this.props.title} </div>
        <div className='sub-title'> {this.props.subTitle} </div>
      </div>
    );
  }
}

export default Header;
