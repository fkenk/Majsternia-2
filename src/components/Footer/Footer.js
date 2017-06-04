import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';

class Footer extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.map}>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>
        <div className={s.text}>
          <h3 className={s.text__header} >Контакти</h3>
          <div className={s.text__contacts}>
            <div className={s.text__phone}>+38 066 445 59 00</div>
            <div className={s.text__street}>м. Мукачево, вул. Переяславська, 1</div>
          </div>
          <div className={s.text__links}>
            <Link className={classNames(s.link)} to="/">Каталог продукції</Link>
            <Link className={s.link} to="/">Про нас</Link>
            <Link className={s.link} to="/">Наші роботи</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
