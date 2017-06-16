import React from 'react';
import {defineMessages, FormattedMessage} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.css';
import Link from '../Link';

class Gallery extends React.Component {
  render() {
    const {data} = this.props.projects;
    return (
      <div className={s.container}>
        <div className={s.text}>
          <h2 className={s.text__header}>Краще один раз подивитись</h2>
          <p className={s.text__content}>Фото проектів з нашого <b>instagram</b>.</p>
        </div>
        <div className={s.gallery}>
          {
            data.slice(0, 6).map((e, i) =>
              <div className={s.gallery__item} key={i}>
                <div className={s.gallery__container} key={i + 1}>
                  <Link to='/' className={s.gallery__img} key={i + 2} alt={e.alt}
                        style={{backgroundImage: `url(${e.img})`}}/>
                </div>
                <p className={s.gallery__text}>{e.tags.map((e, i) => <span key={i}> #{e}</span>)}</p>
              </div>
            )
          }
        </div>
        <Link to="/" className={s.link}>
          <div className={s.button}>Всі проекти</div>
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Gallery);
