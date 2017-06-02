/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import logo from './Group.svg'
import MyLanguageSwitcher from '../MyLanguageSwitcher'
import Info from '../Info'

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Bsdfsdrand',
    description: 'Brand name displayed in header',
  },
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'React',
    description: 'Title in page header',
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header',
  },
});

class Header extends React.Component {
  render() {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <span>Майстерня</span>
                <div className={s.callMenu}>
                    <div className={s.line}></div>
                    <div className={s.line}></div>
                    <div className={s.line}></div>
                </div>
            </div>
            <div className={s.logo}>
                    <img src={logo} alt="Here is logo"></img>
                    <span>Майстерня</span>
            </div>
            <div className={s.header__content}>
                <div className={s.sidebar}>
                    <div className={s.statement}>
                        <span>Створюємо шедeври
                                з натурального каменю власноруч</span>
                    </div>
                    <div className={s.footer}>
                        <MyLanguageSwitcher hide={true} />
                        <Link to="/" className={s.link}><div className={s.button}>Зв'язатись з нами</div></Link>
                    </div>
                </div>
                <Info textHeader="Майстерня" hasImage={true} hide={true}/>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Header);
