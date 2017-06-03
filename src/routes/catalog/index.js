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

export default {

  path: '/catalog',

  action() {
    return {
      title: 'Catalog',
      component: <Layout><Catalog /></Layout>,
    };
  },

};
