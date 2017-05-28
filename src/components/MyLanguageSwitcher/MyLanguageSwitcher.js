import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyLanguageSwitcher.css';


class MyLanguageSwitcher extends React.Component {
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
                <span>Укр</span>
                <span>/</span>
                <span>Рус</span>
            </div>
        );
    }
}

export default withStyles(s)(MyLanguageSwitcher);
