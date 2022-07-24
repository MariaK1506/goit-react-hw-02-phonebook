import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <Item key={contact.id}>
      <Name>{contact.name}:</Name>
      <Number>{contact.number}</Number>
      <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
