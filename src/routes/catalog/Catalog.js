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
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUs';
import CatalogRouteItem from '../../components/CatalogRouteItem';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';



var CatalogItems = [
    {
        id: 1,
        title: "Внутрішнє та зовнішнє оздоблення",
        hasFilter: true
    },
    {
        id: 2,
        title: "Складні архітектурні вироби",
        hasFilter: false
    },{
        id: 3,
        title: "Садово-паркове мистецтво",
        hasFilter: false
    }
]

const Home = ()=>
      <div >
        <Header />
          <div className={s.container}>
              <h2 className={s.text__header}>Каталог продукції</h2>
              {
                  CatalogItems.map(function(el,index) {
                      return <CatalogRouteItem
                          key={el.id}
                          title={el.title}
                          hasFilter={el.hasFilter}
                          indexOfCatalogItem = {index}
                      />;
                  })
              }
          </div>
        <AboutUs/>
        <ContactForm />
        <Footer />
      </div>

export default withStyles(s)(Home);
