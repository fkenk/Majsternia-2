import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';
import CatalogItem from '../CatalogItem';



const Photos = [
  {
    src: 'https://ucarecdn.com/7f5654d3-7b37-42a4-b66f-f974691437d5/1.jpg',
    alt: 'sculpture',
    text: 'Портрети',
    size: 'small'
  },
  {
    src: 'https://ucarecdn.com/efb8150d-edfb-4e52-9476-94d48c432488/2.jpg',
    alt: 'lion',
    text: 'Скульптури',
    size: 'small'
  },
  {
    src: 'https://ucarecdn.com/46a9d8cb-d8c8-430d-a513-ae4d1600ccde/3.jpg',
    alt: 'fireplace',
    text: 'Каміни',
    size: 'big'
  },
  {
    src: 'https://ucarecdn.com/4f89d9e7-313a-4d73-a73e-80679689fe67/4.jpg',
    alt: 'bathroom',
    text: 'Столешні',
    size: 'big'
  }
];

class Catalog extends React.Component {
  render() {
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
            <Link to="/" className={s.link}>
              <div className={s.button}>Каталог продукції</div>
            </Link>
          </div>
          {Photos.map((e, i) =>
            <CatalogItem size={e.size} img={e.src} alt={e.alt} text={e.text} key={i}/>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);
