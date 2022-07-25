import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Container } from 'components/Container/Container';
import { Section } from './Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import Basic from './Formik/Formik';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  addContact = ({ name, number }) => {
    /* Получили в App доступ к state формы */
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFiltredContact = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFiltredContact();

    return (
      <>
        <GlobalStyle />
        <Container>
          <h1>Phonebook</h1>
          <Section>
            <ContactForm onSubmit={this.addContact} />
          </Section>
          <Section title="Contacts">
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
          <Basic></Basic>
        </Container>
      </>
    );
  }
}
