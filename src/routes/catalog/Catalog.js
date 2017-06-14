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
import history from '../../history'


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
  }, {
    id: 3,
    title: "Садово-паркове мистецтво",
    hasFilter: false
  }
]
class Catalog extends React.Component {
 /* componentDidMount() {
    console.log(this.props.context);
    /*const history = createHistory();
    const location = history.location;
    console.log(location);
    history.listen((location, action) => {
      console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
      console.log(`The last navigation action was ${action}`)
    })
    console.log('asdsadasdasdasd');*/
 /* }

 /* componentWillReceiveProps() {
    //console.log(this.props.context.query.stone);
    //let context  = this.props.context;

    //const location = history.location.search;
    //console.log(history);
    //history.push('/catalog?stone=granite', { some: 'state' })
    //console.log(history);
  }*/

  render() {
    return (
      <div >
        <Header />
        <div className={s.container}>
          <h2 className={s.text__header}>Каталог продукції</h2>
          {
            CatalogItems.map(function (el, index) {
              return <CatalogRouteItem
                key={el.id}
                title={el.title}
                hasFilter={el.hasFilter}
                selected={0}
                indexOfCatalogItem={index}
              />;
            })
          }
        </div>
        <AboutUs/>
        <ContactForm />
        <Footer />
      </div>)
  }
}

export default withStyles(s)(Catalog);
