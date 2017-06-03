import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Info.css';
import Link from '../Link';
import classNames from 'classnames';
import logo from '../Header/Group.svg';

class Info extends React.Component {

    findClass(){
        if(this.props.hide){
            return s.containerHide;
        }
        else{
            return s.container;
        }
    }

    render() {
        return (
                <div className={this.findClass()}>
                    <div className={s.header}>
                        {
                            this.props.hasImage && <img src={logo} alt="Here is logo"></img>
                        }
                        <div className={s.text}>
                            <h3 className={s.text__header} >{this.props.textHeader}</h3>
                            <div className={s.text__contacts}>
                                <span className={s.text__phone}>+38 066 445 59 00</span>
                                <span className={s.text__street}>м. Мукачево, вул. Переяславська, 1</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.footer}>
                        <p><Link className={classNames(s.link)} to="/catalog">Каталог продукції</Link></p>
                        <p><Link className={s.link} to="/">Про нас</Link></p>
                        <p><Link className={s.link} to="/">Наші роботи</Link></p>
                    </div>
                </div>
        );
    }
}
export default withStyles(s)(Info);
