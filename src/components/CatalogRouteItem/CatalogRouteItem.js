
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
];

var PICTURES = [
    {
        id: 1,
        image: 'https://ucarecdn.com/68a993ed-d978-4ebc-90f7-a32997080c79/f56c44f794e0f85bdc41b8e8b194436c.jpg',
        width: '280px',
        height: "420px"
        
    },[
        {
            id: 2,
            image: "https://ucarecdn.com/f7b26641-b25e-4ce8-8ace-a5b5a51fdb6b/b55bdd83663cf72068daf7e146cdfdd2.jpg",
            width: '180px',
            height: "220px"
        },
        {
            id: 3,
            image: "https://ucarecdn.com/631387aa-833c-4d50-b9e7-7c1f8f6135c8/eda5c99e93c4f7080e549addda96c159.jpgg",
            width: '180px',
            height: "180px"
        }

    ],[
        {
            id: 4,
            image: "https://ucarecdn.com/df091889-c511-40b5-8e4a-e0abb7ed9e2b/33fe0d6179232f68f7418898085c2a891.jpg",
            width: '380px',
            height: "160px"
        }
        ,
        {
            id: 5,
            image: "https://ucarecdn.com/fdc0dd42-6b35-4e65-9daf-66a5d6513d27/99fa7bc0f523a32cd4126e64e5132406.jpg",
            width: '380px',
            height: "240px"
        }
    ]
];

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
        const hasFilter = this.props.hasFilter;

        return (
        <div className={s.container}>
            <span className={s.title}>{this.props.title}</span>
            <div className={s.content}>
                <hr className={s.line}/>
                {
                    hasFilter &&
                        <div className={s.filter}>
                        <span>Вид каменю: </span>
                        {
                            filterItems.map(function (el, idx) {
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
                }
                <div className={s.images}>
                    {
                        PICTURES.map(function (el,index) {
                            if(index==0){
                               return <img
                                                key={el.id}
                                                src={el.image}
                                                width={el.width}
                                                height={el.height}
                                                className={s.image}
                                                alt="Here is img"/>

                            }else{
                                return(
                                    <div className={s.column}>
                                        {
                                            PICTURES[index].map(function (el) {
                                               return <img
                                                    key={el.id}
                                                    src={el.image}
                                                    width={el.width}
                                                    height={el.height}
                                                    className={s.image}
                                                    alt="Here is img"/>
                                            })
                                        }
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        </div>
        );
    }
}

export default withStyles(s)(CatalogRouteItem);
