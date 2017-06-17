import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogItem.css';
import Link from '../Link';

class CatalogItem extends React.Component {
  render() {
        return (
        <div className={s.container}>
            <Link to="/">
                <img src={this.props.img} alt={this.props.alt} className={this.props.size === "big" ? s.big : s.small}/>
            </Link>
            <div>
                <Link className={s.link} to="/">{this.props.text}</Link>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(CatalogItem);
