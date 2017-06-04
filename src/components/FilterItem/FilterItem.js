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
import s from './FilterItem.css';

class FilterItem extends React.Component {
    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool
        }

    static defaultProps = {
        isSelected: false
    }
    
    constructor() {
        super();
        this.state = {
            hover_flag: false
        };
    }

    hoverEvent() {
        this.setState({hover_flag: !this.state.hover_flag});
    }

    render() {
        var aStyle={
            color: '#3C3C43'
        };
        if (this.props.isSelected || this.state.hover_flag) {
            aStyle['color'] = '#f76868';
        }

        return (
            <li
                className={s.filterItem}
                onClick={this.props.onClick}
                onMouseEnter={this.hoverEvent.bind(this)}
                onMouseLeave={this.hoverEvent.bind(this)}
                style={aStyle}
            >{this.props.name}</li>
    );
  }
}

export default withStyles(s)(FilterItem);
