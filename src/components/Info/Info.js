/**
 * Created by BusinessPC on 5/27/2017.
 */
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
import s from './Info.css';
import Link from '../Link';
import classNames from 'classnames';

class Info extends React.Component {
    render() {
        return (
            <div className={s.container}>
                    <h3 className={s.text__header} >Контакти</h3>
                    <div className={s.text__contacts}>
                        <div className={s.text__phone}>+38 066 445 59 00</div>
                        <div className={s.text__street}>м. Мукачево, вул. Переяславська, 1</div>
                    </div>
                    <p><Link className={classNames(s.link)} to="/">Каталог продукції</Link></p>
                    <p><Link className={s.link} to="/">Про нас</Link></p>
                    <p><Link className={s.link} to="/">Наші роботи</Link></p>
                </div>
        );
    }
}

export default withStyles(s)(Info);
