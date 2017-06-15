/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Catalog from './Catalog';
import Layout from '../../components/Layout';
import * as load from '../../actions/PageLoad'

export default {

  path: '/catalog',

  async action(context) {
    //dispatch.store.dispatch(load.getPhotos());
    console.log(context);
    await Promise.all([
      context.store.dispatch(load.getData('about', 'GET_DATA_ABOUT_SUCCESS')),
      context.store.dispatch(load.getData('projects', 'GET_DATA_PROJECTS_SUCCESS')),
    ]);
    console.log(context.store.getState().aboutUs);
    return {
      title: 'Catalog',
      component: <Layout><Catalog title={this.title}  context={context} /></Layout>,
    };
  },

};
