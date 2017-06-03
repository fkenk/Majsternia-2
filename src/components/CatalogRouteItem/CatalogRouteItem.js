
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogRouteItem.css';

const CatalogRouteItem  = (props)=>
    <div className={s.container}>
        <span className={s.title}>{props.title}</span>

    </div>


export default withStyles(s)(CatalogRouteItem);
