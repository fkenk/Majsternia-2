/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {defineMessages, FormattedMessage} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Galery.css';
import Link from '../Link';
import img1 from './img1.jpg'
import img2 from './img2.jpg'


class Gallery extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.text}>
          <h2 className={s.text__header}>Краще один раз подивитись</h2>
          <p className={s.text__content}>Фото проектів з нашого <b>instagram</b>.</p>
        </div>
        <div className={s.gallery}>
          <div className={s.gallery__item}>
            <img className={s.img} src={img1} alt=""></img>
            <p className={s.gallery__text}>#onyx #m-selection</p>
          </div>
          <div className={s.gallery__item}>
            <img className={s.img} src={img2} alt=""></img>
            <p className={s.gallery__text}>#3d #randomy</p>
          </div>
          <div className={s.gallery__item}>
            <img className={s.img} src={img1} alt=""></img>
            <p className={s.gallery__text}>#onyx #m-selection</p>
          </div>
          <div className={s.gallery__item}>
            <img className={s.img} src={img1} alt=""></img>
            <p className={s.gallery__text}>#onyx #m-selection</p>
          </div>
          <div className={s.gallery__item}>
            <img className={s.img} src={img1} alt=""></img>
            <p className={s.gallery__text}>#onyx #m-selection</p>
          </div>
          <div className={s.gallery__item}>
            <img className={s.img} src={img1} alt=""></img>
            <p className={s.gallery__text}>#onyx #m-selection</p>
          </div>
        </div>
        <Link to="/" className={s.link}><div className={s.button}>Всі проекти</div></Link>
      </div>

    );
  }
}

export default withStyles(s)(Gallery);
