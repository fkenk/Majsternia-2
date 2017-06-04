import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogItem.css';
import Link from '../Link';

class CatalogItem extends React.Component {
    findClass(){
        if(this.props.size=="big"){
            return s.big;
        }
        else{
            return s.small;
        }
    }

  render() {
        return (
        <div className={s.container}>
            <img src={this.props.img} alt="Image" className={this.findClass()}/>
            <div>
                <Link className={s.link} to="/">{this.props.text}</Link>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(CatalogItem);
