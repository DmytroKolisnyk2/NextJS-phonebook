import React, { Component } from "react";
import styles from "./ContactForm.module.scss";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/items/items-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import { NotificationManager } from "react-notifications";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  // nameId = v4();
  // numberId = v4();
  componentDidMount() {
    this.nameId = v4();
    this.numberId = v4();
  }

  reset = () => this.setState({ ...INITIAL_STATE });

  onInputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  addContact = (contactData) => {
    this.props.contacts.length >= 100
      ? NotificationManager.error(`Too many contacts now.`)
      : this.props.addContact(contactData);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { contacts } = this.props;
    if (!contacts.find((item) => item.name === this.state.name)) {
      const contactData = { name: this.state.name, number: this.state.number, id: v4() };
      this.addContact(contactData);
      this.reset();
    } else {
      NotificationManager.error(`${this.state.name} is already in contacts.`);
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmitHandler}>
        <label className={styles.form__title} htmlFor={this.nameId}>
          <h3 className={styles.phonebook__headline}>Name</h3>
          <input
            className={styles.form__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
            value={this.state.name}
            onChange={this.onInputHandler}
          />
        </label>
        <label className={styles.form__title} htmlFor={this.numberId}>
          <h3 className={styles.phonebook__headline}>Number</h3>
          <input
            className={styles.form__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberId}
            value={this.state.number}
            onChange={this.onInputHandler}
          />
        </label>
        <button className={styles.form__submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
