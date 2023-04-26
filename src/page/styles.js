import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ lg }) => css`
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: ${lg ? 'start' : 'center'};
      align-items: center;
    `}
`;

export const Page = styled.div`
  ${({theme}) => css`
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    > .posts_container {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    > .page_title {
      padding: 2rem 4rem;
      background-color: #7695EC;
      > span {
        font-size: 18px;
        font-weight: bold;
        color: #FFFFFF;
      }
    }

  `}
`;
