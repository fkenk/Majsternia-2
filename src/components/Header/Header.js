import React from 'react';
import {defineMessages, FormattedMessage} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
var classNames = require('classnames');
import s from './Header.css';
import s2 from './HeaderSecondary.css';
import Link from '../Link';
import logo from './Group.svg'
import cross from './Cross.svg'
import MyLanguageSwitcher from '../MyLanguageSwitcher'
import Info from '../Info'
import Menu from 'react-burger-menu/lib/menus/slide'


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

var stylesBM = {
  bmBurgerButton: {
    position: 'absolute',
    width: '18px',
    height: '30px',
    right: '26px',
    top: '28px',
  },
  bmCrossButton: {
    height: '32px',
    width: '32px'
  },
  bmMenu: {
    background: '#ffffff',
    'minWidth': '360px',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const Header = (props) => {
  if (props.type === 'home') {
    return (
      <div>
        <div className={s.callMenu}>
          <Menu
            right
            width={ '360px' }
            customBurgerIcon={
              <div>
                <div className={s.line}></div>
                <div className={s.line}></div>
                <div className={s.line}></div>
              </div>
            }
            customCrossIcon={ <img src={cross} alt="cross"/>}
            styles={ stylesBM }>
            <div className={s.menuItems}>
              <Info textHeader="Майстерня" hasImage={true} menu={true}/>
            </div>
            <div className={s.menuFooter}>
              <Link to="/" className={s.link}>
                <div className={s.button}>Зв'язатись з нами</div>
              </Link>
            </div>
          </Menu>
        </div>
        <div className={s.container}>
          <div className={s.header}>
            <Link to="/" className={s.link}>
              <div className={s.headerLogo}>Майстерня</div>
            </Link>
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
    stylesBM.bmBurgerButton.top = '34px';
    return (
      <div>
        <div className={s2.callMenu}>
          <Menu
            right
            width={ '360px' }
            customBurgerIcon={
              <div>
                <div className={s.line}></div>
                <div className={s.line}></div>
                <div className={s.line}></div>
              </div>
            }
            customCrossIcon={ <img src={cross} alt="cross"/>}
            styles={ stylesBM }>
            <div className={s.menuItems}>
              <Info textHeader="Майстерня" hasImage={true} menu={true}/>
            </div>
            <div className={s.menuFooter}>
              <Link to="/" className={s.link}>
                <div className={s.button}>Зв'язатись з нами</div>
              </Link>
            </div>
          </Menu>
        </div>
        <div className={s2.container}>
          <div className={s2.header}>
            <h2><Link className={s2.title} to="/">Майстерня</Link></h2>

            <div className={s2.text}>
              <div className={s2.text__contacts}>
                <span className={s2.text__phone}>+38 066 445 59 00</span>
                <span className={s2.text__place}>Доставка по Україні</span>
              </div>

              <Link to="/" className={s.link}>
                <div className={s2.button}>Зв'язатись з нами</div>
              </Link>
              <MyLanguageSwitcher hide={true}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default withStyles(s2, s)(Header);
