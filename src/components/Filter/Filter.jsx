import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={onChange}
        id={filterInputId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
