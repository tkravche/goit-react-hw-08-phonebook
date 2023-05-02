import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContactThunk } from 'redux/contacts/operations';
import { StyledWrapper, StyledButton } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      <li>
        {name}: {number}
      </li>
      <StyledButton
        onClick={() => {
          console.log(id);
          dispatch(removeContactThunk(id));
        }}
      >
        Delete
      </StyledButton>
    </StyledWrapper>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
