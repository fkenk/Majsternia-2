/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';;

class Header extends React.Component {
  render() {
    return (
        <div className={s.container}>
            <h2 className={s.text__header}>Каталог продукції</h2>
            <div className={s.content}>
                <div className={s.info}>
                    <div className={s.names}>
                        <span>Внутрішнє та зовнішнє оздоблення</span>
                        <span>Складні архітектурні вироби</span>
                        <span>Садово-паркове мистецтво</span>
                    </div>
                    <Link to="/" className={s.link}><div className={s.button}>Каталог продукції</div></Link>
                </div>
                <div className={s.items}>

                </div>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Header);
