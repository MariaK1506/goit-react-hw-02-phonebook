import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #d4d4d4;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  color: #333232;
`;

export const Input = styled.input`
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:focus {
    outline: transparent;
    border: 1px solid #2196f3;
  }
`;
