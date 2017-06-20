import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactForm.css';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userTel: '',
      userEmail: '',
      userMessage: '',
      response: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('userName', this.state.userName);
    formData.append('userTel', this.state.userTel);
    formData.append('userEmail', this.state.userEmail);
    formData.append('userMessage', this.state.userMessage);
    //this.props.context.store.dispatch();
    this.props.getData('callback', 'POST_DATA_CONTACT_FORM', formData)
      .then(function (response) {
        this.setState({userMessage : this.props.msg})
      }.bind(this));

  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.text}>
          <h2 className={s.text__header}>Виготовимо наступний шедевр разом</h2>
          <p className={s.text__content}>Зв’яжіться з нами та дізнайтесь більше</p>
        </div>
        <div className={s.form}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="userName" placeholder="Ім'я" required
                   value={this.state.userName}
                   onChange={this.handleInputChange}/>
            <input type="tel" name="userTel" placeholder="Телефон" required
                   value={this.state.userTel}
                   onChange={this.handleInputChange}/>
            <input type="email" name="userEmail" placeholder="E-mail" required
                   value={this.state.userEmail}
                   onChange={this.handleInputChange}/>
            <textarea name="userMessage" placeholder="Ваша ідея або питання" required
                      value={this.state.userMessage}
                      onChange={this.handleInputChange}></textarea>
            <input type="submit" value="Зв'язатись"/>
          </form>
        </div>
      </div>
    );
  }
}


export default withStyles(s)(ContactForm);
