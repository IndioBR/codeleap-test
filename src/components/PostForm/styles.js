import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ ctt, tt }) => css`
      display: flex;
      flex-direction: column;
      background-color: #FFFFFF;
      width: 100%;
      padding: 2rem;
      border: 1px solid #777777;
      border-radius: 15px;
      > form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        > label {
          font-size: 13px;
          font-weight: bold;
        }
        > input {
          border: 0.1rem solid #777777;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
        }
        > #post_form__content {
          max-width: 100%;
          border-radius: 0.5rem;
          padding: 0.5rem;
          height: 10rem;
        }
        > button {
          all: unset;
          background-color: ${ ctt && tt ? '#7695EC' : '#DDDDDD'};
          color: #FFFFFF;
          font-size: 1.1rem;
          max-width: 10rem;
          align-self: flex-end;
          padding: 0.5rem 2.5rem;
          cursor: pointer;
          border-radius: 0.5rem;
        }
      }
    `}
`;
