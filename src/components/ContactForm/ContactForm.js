import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactForm.css';


class ContactForm extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.text}>
          <h2>Виготовимо наступний шедевр разом</h2>
          <p>Зв’яжіться з нами та дізнайтесь більше</p>
        </div>
        <div className={s.form}>
          <form >
            <input type="text" name="name" placeholder="Ім'я" /><br/>
            <input type="tel" name="name" placeholder="Телефон" /><br/>
            <input type="email" name="name" placeholder="E-mail" /><br/>
            <textarea placeholder="Ваша ідея або питання"></textarea>
            <input type="submit" value="Зв'язатись" />
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ContactForm);
