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
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
// import logoUrl from './logo-small.png';
// import logoUrl2x from './logo-small@2x.png';
import logo from './Group.svg'

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
      // <div className={s.root}>
      //   <div className={s.container}>
      //     <Navigation />
      //     <Link className={s.brand} to="/">
      //       <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
      //       <span className={s.brandTxt}>
      //         <FormattedMessage {...messages.brand} />
      //       </span>
      //     </Link>
      //     <LanguageSwitcher />
      //     <div className={s.banner}>
      //       <h1 className={s.bannerTitle}>
      //         <FormattedMessage {...messages.bannerTitle} />
      //       </h1>
      //       <FormattedMessage tagName="p" {...messages.bannerDesc} />
      //     </div>
      //   </div>
      // </div>
        
        <div className={s.container}>
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
                        <div className={s.languageSwitcher}>
                            <span>Укр</span>
                            <span>/</span>
                            <span>Рус</span>
                        </div>
                        <Link to="/" className={s.link}><div className={s.button}>Зв'язатись з нами</div></Link>
                    </div>
                </div>
                <div className={s.info}>

                </div>

            </div>
        </div>
    );
  }
}

export default withStyles(s)(Header);
