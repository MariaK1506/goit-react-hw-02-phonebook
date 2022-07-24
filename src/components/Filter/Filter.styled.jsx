import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  color: #333232;
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:focus {
    outline: transparent;
    border: 1px solid #2196f3;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
