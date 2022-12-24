import styled from 'styled-components';

export const CardProfileContainer = styled.div`
  width: 100%;
  padding: 3.2rem 4rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  display: flex;
  gap: 3.2rem;
  margin-top: -3rem;

  img {
    height: 14.8rem;
    width: 14.8rem;
    border-radius: 8px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    padding-top: 2.4rem;
    margin-top: 1rem;
  }
`;
