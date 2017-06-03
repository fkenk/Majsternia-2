import React from 'react';
import {defineMessages, FormattedMessage} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Galery.css';
import Link from '../Link';
import img1 from './img1.jpg'
import img2 from './img2.jpg'

const Catalog = [
  {
    src: img1,
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: img2,
    alt: 'abstract',
    text: '#3d #randomy'
  },
  {
    src: img1,
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: img1,
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: img1,
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: img1,
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
];
class Gallery extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.text}>
          <h2 className={s.text__header}>Краще один раз подивитись</h2>
          <p className={s.text__content}>Фото проектів з нашого <b>instagram</b>.</p>
        </div>
        <div className={s.gallery}>
          {
            Catalog.map(e =>
              <div className={s.gallery__item}>
                <div className={s.img}>
                  <img src={e.src} alt={e.alt}></img>
                </div>
                <p className={s.gallery__text}>{e.text}</p>
              </div>
            )
          }
        </div>
        <Link to="/" className={s.link}><div className={s.button}>Всі проекти</div></Link>
      </div>
    );
  }
}

export default withStyles(s)(Gallery);
