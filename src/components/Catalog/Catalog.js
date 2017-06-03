import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';
import CatalogItem from '../CatalogItem';

import first from './images/1.jpg';
import second from './images/2.jpg';
import third from './images/3.jpg';
import fourth from './images/4.jpg';

class Catalog extends React.Component {
  render() {
      var size ={
          small: "small",
          big: "big"
      };

        return (
        <div className={s.container}>
            <h2 className={s.text__header}>Каталог продукції</h2>
            <div className={s.content}>
                <div className={s.info}>
                    <div className={s.names}>
                        <span>Внутрішнє та зовнішнє оздоблення</span>
                        <span>Складні архітектурні вироби</span>
                        <span>Садово-паркове мистецтво</span>
                    </div>
                    <Link to="/" className={s.link}><div className={s.button}>Каталог продукції</div></Link>
                </div>
                <CatalogItem size={size.small} img={first} text='Портрети'/>
                <CatalogItem size={size.small} img={second} text='Скульптури'/>
                <CatalogItem size={size.big}img={third} text='Каміни'/>
                <CatalogItem size={size.big} img={fourth} text='Столешні'/>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Catalog);
