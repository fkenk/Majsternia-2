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
import * as load from '../../actions/apiAction'

export default {

  path: '/catalog',

  async action(context) {
    //dispatch.store.dispatch(load.getPhotos());
    console.log();

    await Promise.all([
      context.store.dispatch(load.getData('about', 'GET_DATA_ABOUT')),
      context.store.dispatch(load.getData('projects', 'GET_DATA_PROJECTS')),
      context.store.dispatch(load.getData('decoration', 'GET_DECORATION_IMAGES')),
      context.store.dispatch(load.getData('architecture', 'GET_ARCHITECTURE_IMAGES')),
      context.store.dispatch(load.getData('park', 'GET_PARK_IMAGES')),

    ]);
    return {
      title: 'Catalog',
      component: <Layout><Catalog title={this.title}  context={context} /></Layout>,
    };
  },

};
