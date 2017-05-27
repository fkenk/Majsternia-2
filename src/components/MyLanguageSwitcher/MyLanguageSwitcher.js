import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyLanguageSwitcher.css';


class MyLanguageSwitcher extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <span>Укр</span>
                <span>/</span>
                <span>Рус</span>
            </div>
        );
    }
}

export default withStyles(s)(MyLanguageSwitcher);
