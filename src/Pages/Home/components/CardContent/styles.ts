import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContentContainer = styled(Link)`
  display: flex;
  width: 100%;
  height: 26rem;
  flex-direction: column;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.6rem;
    margin-bottom: 2rem;

    h1 {
      flex: 1;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    p {
      width: max-content;
    }
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
