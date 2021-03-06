/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import * as load from '../../actions/apiAction'

export default {

  path: '/',

  async action(context) {
    await Promise.all([
      context.store.dispatch(load.getData('about', 'GET_DATA_ABOUT')),
      context.store.dispatch(load.getData('projects', 'GET_DATA_PROJECTS')),
    ]);
    return {
      title: 'Home',
      component: <Layout><Home context={context}/></Layout>,
    };
  },

};
