import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme, user }) => css`
      width: 50rem;
      padding: 2rem 3rem;
      background-color: #FFFFFF;
      border-radius: 1rem;
      > form {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        > label {
          font-size: 15px;
          font-weight: bold;
        }
        > input {
          border: 0.1rem solid #777777;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
        }
        > button {
          all: unset;
          background-color: ${user ? '#7695EC' : '#DDDDDD'};
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
