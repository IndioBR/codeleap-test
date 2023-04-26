import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border: 0.1rem solid #999999;
    border-radius: 1rem;
    > .post_title_div {
      border-radius: 0.7rem 0.7rem 0 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #FFFFFF;
      padding: 1rem 2.5rem;
      background-color: #7695EC;
      > h2 {
        font-size: 24px;
      }
      > .post_actions {
        width: 7%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        > img {
          max-width: 2.4rem;
          cursor: pointer;
        }
      }
    }
    > .post_content_div {
      padding: 1.5rem 2.5rem;
      > .post_user {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        > span {
          color: #999999;
        }
      }
    }
  `}
`;
