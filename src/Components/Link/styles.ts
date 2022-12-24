import styled from 'styled-components';

export const LinkContainer = styled.a`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 700;
  border-bottom: 1px solid transparent;

  svg {
    border-bottom: 1.5px solid transparent;
  }

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
    transition: 0.2s;
  }
`;
