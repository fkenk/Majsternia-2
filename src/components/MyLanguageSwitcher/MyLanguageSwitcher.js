import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyLanguageSwitcher.css';


class MyLanguageSwitcher extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 1
        };
    }
    toggle(position){
        if (this.state.active === position) {
            this.setState({active : null})
        } else {
            this.setState({active : position})
        }
    }

    myColor(position) {
        if (this.state.active === position) {
            return "#3C3C43";
        }
        return "#c4c4c4";
    }

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
                <span
                    style={{
                        color: this.myColor(0)
                    }}
                    onClick={() => {this.toggle(0)}}>
                    Укр
                </span>
                <span>/</span>
                <span
                    style={{color: this.myColor(1)}}
                    onClick={() => {this.toggle(1)}}>
                    Рус
                </span>
            </div>
        );
    }
}

export default withStyles(s)(MyLanguageSwitcher);