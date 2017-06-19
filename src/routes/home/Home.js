/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import AboutUs from '../../components/AboutUs';
import Gallery from '../../components/Gallery';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as load from '../../actions/apiAction'
class Home extends React.Component {

  render() {

    const {aboutUs, projects, contactForm} = this.props;
    const { pageActions } = this.props.pageActions; //doesnt work???
    console.log(this.props.pageActions);
    return (
      <div >
        <Header type="home"/>
        <Catalog/>
        <AboutUs aboutUs={aboutUs}/>
        <Gallery projects={projects}/>
        <ContactForm msg={contactForm.data.msg} context={this.props.context} getData={this.props.pageActions}/>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aboutUs: state.aboutUs,
    projects: state.projects,
    contactForm: state.contactForm
  }
}
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(load.getData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
