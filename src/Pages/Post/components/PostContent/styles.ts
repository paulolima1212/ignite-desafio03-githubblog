import styled from 'styled-components';

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 3.2rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.textSizes['text-title-m']};
  }

  ul {
    list-style: inherit;
    padding: 1rem;
  }

  > p {
    margin-bottom: 2.5rem;
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }

  pre {
    font-size: 1.5rem;
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
    }
  }

  code {
    font-family: 'FiraCode', monospace !important;
    line-height: 1.6;
  }

  img {
    width: 100%;
  }
`;
