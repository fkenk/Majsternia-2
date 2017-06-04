import React from 'react';
import {defineMessages, FormattedMessage} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
var classNames = require('classnames');
import s from './Header.css';
import s2 from './HeaderSecondary.css';
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

const Header = (props) => {
  if (props.type === 'home') {
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
              <MyLanguageSwitcher hide={true}/>
              <Link to="/" className={s.link}>
                <div className={s.button}>Зв'язатись з нами</div>
              </Link>
            </div>
          </div>
          <Info textHeader="Майстерня" hasImage={true} hide={true}/>
        </div>
      </div >
    )
  } else {
    return (
      <div className={s2.container}>
        <div className={s2.header}>
          <h2><Link className={s2.title} to="/">Майстерня</Link></h2>
          <div className={s2.text}>
            <div className={s2.text__contacts}>
              <span className={s2.text__phone}>+38 066 445 59 00</span>
              <span className={s2.text__place}>Доставка по Україні</span>
            </div>

            <Link to="/" classNames={s.link}>
              <div className={s2.button}>Зв'язатись з нами</div>
            </Link>
            <MyLanguageSwitcher hide={true}/>
            <div className={s2.callMenu}>
              <div className={s2.line}></div>
              <div className={s2.line}></div>
              <div className={s2.line}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default withStyles(s2, s)(Header);
