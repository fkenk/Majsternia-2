import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogRouteItem.css';
import FilterItem from '../FilterItem';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as load from '../../actions/apiAction'
import Link from '../Link';

const filterItems = [
  {
    id: 1,
    value: "marble",
    name: "мармур",
    link: "/catalog?stone=marble"
  }, {
    id: 2,
    value: "granite",
    name: "граніт",
    link: "/catalog?stone=granite"
  }, {
    id: 3,
    value: "quartzite",
    name: "пісковик",
    link: "/catalog?stone=quartzite"
  }, {
    id: 4,
    value: "sandstone",
    name: "вапняк",
    link: "/catalog?stone=sandstone"
  }, {
    id: 5,
    value: "limestone",
    name: "квацит",
    link: "/catalog?stone=limestone"
  }, {
    id: 6,
    value: "onyx",
    name: "онікс",
    link: "/catalog?stone=onyx"
  }
];
const dimensions = [
  [
    {
      width: '280px',
      height: '420px'
    }, {
      width: '180px',
      height: "220px"
    }, {
      width: '180px',
      height: "180px"
    }, {
      width: '380px',
      height: "160px"
    }, {
      width: '380px',
      height: "240px"
    }
  ],[
      {
        width: '208.81px',
        height: "387px"
      }, {
        width: '283.39px',
        height: "387px"
      }, {
        width: '347.8px',
        height: "387px"
      }
  ],[
        {
          width: '880px',
          height: "387px"
        }
      ]
];

class CatalogRouteItem extends React.PureComponent {

  constructor(props) {
    super(props);
    let selectedItem = this.props.stoneId || 'marble';
    this.state = {
      selectedItem
    }
  }

  clickHandler(idx) {
    this.setState({selectedItem: filterItems[idx].value});
    return false;
  }


  render() {
    const {hasFilter, indexOfCatalogItem: index,catalog} = this.props;
    const currentImages = Object.keys(catalog[index])[0].toString();

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
                    var is_selected = this.state.selectedItem === filterItems[idx].value;
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
              `
            </div>
          }
          <div className={s.images}>
            {
              catalog[index][currentImages].data.map(function (el, i){
                return(
                    <div key={i} className={s.wrapper} style={dimensions[index][i]}>
                      <Link to='/' className={s.image} alt={el.alt}
                            style={{backgroundImage: `url(${el.img})`}}/>
                    </div>
                );
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
    catalog:[
      {decoration: state.decoration},
      {architecture: state.architecture},
      {park: state.park}
    ]
  }
}
export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(CatalogRouteItem));

