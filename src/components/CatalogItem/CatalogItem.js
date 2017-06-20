import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogItem.css';
import Link from '../Link';

class CatalogItem extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={this.props.size === "big" ? s.big : s.small}>
          <Link to="/" className={s.gallery__img} alt={this.props.alt}
                style={{backgroundImage: `url(${this.props.img})`}}/>
        </div>
        <Link className={s.link} to="/">{this.props.text}</Link>
      </div>
    );
  }
}

export default withStyles(s)(CatalogItem);
