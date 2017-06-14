import React from 'react';
import {defineMessages, FormattedMessage} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Galery.css';
import Link from '../Link';

const Catalog = [
  {
    src: 'https://ucarecdn.com/2ff632ca-9d75-425c-89f1-1f0cef1ee201/img1.jpg',
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: 'https://ucarecdn.com/fe295e01-83c7-4b67-b684-5152af7afb8a/img2.jpg',
    alt: 'abstract',
    text: '#3d #randomy'
  },
  {
    src: 'https://ucarecdn.com/2ff632ca-9d75-425c-89f1-1f0cef1ee201/img1.jpg',
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: 'https://ucarecdn.com/2ff632ca-9d75-425c-89f1-1f0cef1ee201/img1.jpg',
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: 'https://ucarecdn.com/2ff632ca-9d75-425c-89f1-1f0cef1ee201/img1.jpg',
    alt: 'abstract',
    text: '#onyx #m-selection'
  },
  {
    src: 'https://ucarecdn.com/2ff632ca-9d75-425c-89f1-1f0cef1ee201/img1.jpg',
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
            Catalog.map((e,i) =>
              <div className={s.gallery__item} key={i}>
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
