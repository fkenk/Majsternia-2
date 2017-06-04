
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogRouteItem.css';
import FilterItem from '../FilterItem';


var filterItems = [
    {
        id: 1,
        name: "мармур",
    }, {
        id: 2,
        name: "граніт",
    },{
        id: 3,
        name: "пісковик",
    },{
        id: 4,
        name: "вапняк",
    },{
        id: 5,
        name: "квацит",
    },{
        id: 6,
        name: "онікс",
    }
]

class CatalogRouteItem  extends React.Component {


    constructor() {
        super();
        this.state = {
            selectedItem: 0
        };
    }

    clickHandler(idx) {
        this.setState({selectedItem: idx});
    }

    render() {

        return (
        <div className={s.container}>
            <span className={s.title}>{this.props.title}</span>
            <div className={s.content}>
                <hr className={s.line}/>
                <div className={s.filter}>
                    <span>Вид каменю: </span>
                    {
                        filterItems.map(function (el,idx) {
                            var is_selected = this.state.selectedItem == idx;
                            return <FilterItem
                                key={el.id}
                                name={el.name}
                                onClick={this.clickHandler.bind(this, idx)}
                                isSelected={is_selected}
                            />;
                        }.bind(this))
                    }
                </div>
                <div className={s.images}>

                </div>
            </div>
        </div>
        );
    }
}

export default withStyles(s)(CatalogRouteItem);
