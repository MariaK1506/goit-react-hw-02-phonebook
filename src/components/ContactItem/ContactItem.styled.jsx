import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-around;

  flex-basis: calc(100% / 1 - 15px);
  padding: 15px 5px;
  border: 1px solid #d4d4d4;

  text-align: center;

  margin-left: 15px;
  margin-top: 15px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) and (max-width: 999px) {
    flex-basis: calc(100% / 2 - 15px);
  }

  @media screen and (min-width: 1000px) {
    flex-basis: calc(100% / 3 - 15px);
  }

  &:hover,
  &:focus {
    background-color: rgb(33 150 243 / 10%);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Name = styled.p`
  color: #333232;
  font-weight: 500;
`;

export const Number = styled.p`
  margin-right: 15px;

  color: #000000;

  font-weight: 700;
  text-decoration: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #2196f3;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Button = styled.button`
  min-width: 50px;
  height: 30px;
  border: 0px solid transparent;
  border-radius: 4px;

  color: #fff;
  background-color: #2196f3;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  opacity: 1;

  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
