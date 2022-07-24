import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li key={contact.id}>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
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
