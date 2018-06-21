import React,{Component} from 'react';
import {connect} from 'react-redux';

class Section extends Component {
  render() {
    return (
      <div className='aae-section__container'>
        <div className='wrapper'>
          <img className='feature__image'
           src={`../../style/images/${this.props.image}`}/>
        </div>
        <div className='wrapper'>
          <div className='feature__action'>Collect.</div>
          <div className='feature__action'>Construct.</div>
          <div className='feature__action'>Battle.</div>
          <div className='feature__result'>
            Collect different parts of the brain using different neurons.
            Battle to increase their strength. Try various combinations
            to come up with the ultimate brain!
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
