import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AboutUs.css';
import img1 from './img1.svg'
import Link from '../Link';

class AboutUs extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <img className={s.img} src={img1} alt=""/>
        <div className={s.text}>
          <h2>Про нас</h2>
          <p>Майстерня – це місце, де ваша ідея реалізовується з натурального каменю.
            Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів.
          </p>
          <p>Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх
            авторський супровід та повна реалізація, художнє оформлення інтер'єрів, а також їх доставку та послуги
            монтування.</p>
          <p>Найважливіше для нас – ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання
            термінів виконання.</p>
          <div className={s.redirect}>
            <Link className={s.link} to="/">Детальніше</Link>
            <Link className={s.link} to="/">Переглянути роботи</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AboutUs);
