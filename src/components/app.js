import React, { Component } from 'react';

import SectionTypeOne from '../components/section-type-one';
import SectionTypeTwo from '../components/section-type-two';

import Header from '../components/header';
import Footer from '../containers/footer';

import * as Constants from '../utils/data';

export default class App extends Component {

  render() {
    return (
      <div className="aae__container">
        <Header
          logoImage={Constants.headerData.logoImage}
          title={Constants.headerData.title}
          subTitle={Constants.headerData.subTitle}/>
        <SectionTypeOne
          image={Constants.sectionData[0].image}
          titles={Constants.sectionData[0].titles}
          description={Constants.sectionData[0].description}/>
        <SectionTypeTwo
          images={Constants.sectionData[1].images}
          titles={Constants.sectionData[1].titles}
          descriptions={Constants.sectionData[1].descriptions}/>
        <Footer
          title={Constants.footerData.title}
          leadCaptureMessage = {Constants.footerData.leadCaptureMessage}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }
}
