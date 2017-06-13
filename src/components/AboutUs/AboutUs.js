import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AboutUs.css';
import Link from '../Link';

const AboutUs = () => {
  const img = "https://ucarecdn.com/ac47e338-55d7-40ff-a778-6d47422cbe2e/img1.jpg";

  return (
    <div className={s.container}>
      <div className={s.img}>
        <img src={img} alt="about-us"/>
      </div>
      <div className={s.text}>
        <h2 className={s.text__header}>Про нас</h2>
        <div className={s.text__content}>
          <p>Майстерня – це місце, де ваша ідея реалізовується з натурального каменю.
            Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів.
          </p>
          <p>Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх
            авторський супровід та повна реалізація, художнє оформлення інтер'єрів, а також їх доставку та послуги
            монтування.</p>
          <p>Найважливіше для нас – ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання
            термінів виконання.</p>
        </div>
        <div className={s.text__redirect}>
          <Link className={s.link} to="/">Детальніше</Link>
          <Link className={s.link} to="/">Переглянути роботи</Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(AboutUs);
