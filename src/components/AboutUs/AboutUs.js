import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AboutUs.css';
import Link from '../Link';

class AboutUs extends React.Component {

  render() {
    const {data} = this.props.aboutUs;

    return (
      <div className={s.container}>
        <div className={s.img__container}>
          <Link to='/' className={s.img} alt="about-us"
                style={{backgroundImage: `url(${data.img})`}}/>
        </div>
        <div className={s.text}>
          <h2 className={s.text__header}>{data.title}</h2>
          <div className={s.text__content}>
            <div dangerouslySetInnerHTML={{__html: data.content}}></div>
          </div>
          <div className={s.text__redirect}>
            <Link className={s.link} to="/">Детальніше</Link>
            <Link className={s.link} to="/">Переглянути роботи</Link>
          </div>
        </div>
      </div>
    )
      ;
  }
}

export default withStyles(s)(AboutUs);
