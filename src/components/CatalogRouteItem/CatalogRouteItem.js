import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogRouteItem.css';
import FilterItem from '../FilterItem';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as load from '../../actions/apiAction'

var filterItems = [
  {
    id: 1,
    name: "мармур",
    link: "/catalog?stone=0"
  }, {
    id: 2,
    name: "граніт",
    link: "/catalog?stone=1"
  }, {
    id: 3,
    name: "пісковик",
    link: "/catalog?stone=2"
  }, {
    id: 4,
    name: "вапняк",
    link: "/catalog?stone=3"
  }, {
    id: 5,
    name: "квацит",
    link: "/catalog?stone=4"
  }, {
    id: 6,
    name: "онікс",
    link: "/catalog?stone=5"
  }
];

const PICTURES = [
  {
    id: 1,
    image: 'https://ucarecdn.com/68a993ed-d978-4ebc-90f7-a32997080c79/f56c44f794e0f85bdc41b8e8b194436c.jpg',
    width: '280px',
    height: "420px"

  }, [
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

  ], [
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
const ROW_PICTURES = [
  [
    {
      id: 1,
      image: 'https://ucarecdn.com/9708ec45-5613-498d-b762-1f4774a03786/5b7d0caff985918f2a4666da961485a4.jpg',
      width: '208.81px',
      height: "387px"
    },
    {
      id: 2,
      image: 'https://ucarecdn.com/fe87d38a-1cf2-4556-af68-f22eb434d78f/b55bdd83663cf72068daf7e146cdfdd21.jpg',
      width: '283.39px',
      height: "387px"
    },
    {
      id:3,
      image: 'https://ucarecdn.com/01aa5187-93d4-4651-b4de-6866168b252e/99fa7bc0f523a32cd4126e64e51324061.jpg',
      width: '347.8px',
      height: "387px"
    }
  ],
  [
    {
      id: 4,
      image: 'https://ucarecdn.com/48b3949f-5ad5-4267-9c82-9868e57b5f5e/Group.jpg',
      width: '880px',
      height: "387px"
    }
  ]
];

// const images = PICTURES.map((el, i) => {
//   const itemStyle = {
//     backgroundImage: `url(${el.image})`,
//     height: height
//   };
//   let boxStyle = {
//     height: el.height,
//     width: el.width
//   };
//   return(
//       <div className={s.Box} style={boxStyle} key={i}>
//         <a href="/" className={s.item} style={itemStyle}></a>
//       </div>
//   )
// });

class CatalogRouteItem extends React.Component {


  constructor(props) {
    super(props);
    let selectedItem = this.props.stoneId || 0;
    this.state = {
      selectedItem
    }
  }
  clickHandler(idx) {
    this.setState({selectedItem: idx});
  }


  render() {
    const {hasFilter, indexOfCatalogItem: index,decoration,park,architecture} = this.props;
    console.log(park);

    return (
      <div className={s.container}>
        <span className={s.title}>{this.props.title}</span>
        <div className={s.content}>
          <hr className={s.line}/>
          {
            hasFilter &&
            <div className={s.filter}>
              <span>Вид каменю: </span>
              <div className={s.liItems}>
                {
                  filterItems.map(function (el, idx) {
                    var is_selected = this.state.selectedItem == idx;
                    //console.log('selected = ' + idx + ' = ' + is_selected);
                    return <FilterItem
                      key={el.id}
                      name={el.name}
                      link={el.link}
                      onClick={this.clickHandler.bind(this, idx)}
                      isSelected={is_selected}
                    />;
                  }.bind(this))
                }
              </div>
            </div>
          }
          <div className={s.images}>
            {
              (index == 0) ?
                  PICTURES.map(function (el, index) {
                    if (index == 0) {
                      return <img
                          key={el.id}
                          src={el.image}
                          width={el.width}
                          height={el.height}
                          className={s.image}
                          alt="Here is img"/>

                    } else {
                      return (
                          <div className={s.column} key={index / 10}>
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
                  :
                  ROW_PICTURES[index - 1].map(function (el) {
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
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(load, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    decoration: state.decoration,
    architecture: state.architecture,
    park: state.park
  }
}
export default withStyles(s)(connect(mapStateToProps,mapDispatchToProps)(CatalogRouteItem));

