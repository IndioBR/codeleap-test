import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
  background: rgba(119, 119, 119, 0.1);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > .container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 3rem;
      background-color: #FFFFFF;
      border-radius: 2rem;

      > h3 {
        font-size: 14px;
      }
      > .delete_post__actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        width: 35rem;

        > .delete_post__cancel, .delete_post__confirm {
          padding: 0.2rem 1.6rem;
          cursor: pointer;
        }

        > .delete_post__cancel {
          border: 0.1rem solid #999999;
          border-radius: 0.5rem;
        }
        > .delete_post__confirm {
          background-color: #FF5151;
          color: #FFFFFF;
          border-radius: 0.5rem;
        }
      }
    }
  `}
`;
