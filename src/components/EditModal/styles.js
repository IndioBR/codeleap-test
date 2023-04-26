import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: rgba(119, 119, 119, 0.1);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > .container{
      background-color: #FFFFFF;
      padding: 2rem 3rem;
      width: 55rem;
      border-radius: 3rem;
      > form {
        max-height: 20rem;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        > #edit_form__content {
          max-width: 100%;
          height: 20rem;
          border-radius: 0.7rem;
          padding: 0.5rem;
        }
        > #edit_form__title {
          padding: 0.5rem;
        }
        > .edit_form__actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          align-self: flex-end;
          gap: 2rem;
          > button {
            all: unset;
            background-color: #47B960;
            padding: 0.6rem 2.5rem;
            cursor: pointer;
            font-weight: bold;
            color: #FFFFFF;
            border-radius: 0.5rem;
          }
          > .edit_form__cancel {
            padding: 0.5rem 1.9rem;
            border: 0.1rem solid #000000;
            cursor: pointer;
            font-weight: bold;
            border-radius: 0.5rem;
          }
        }
      }
    }
  `}
`;
