import styled from 'styled-components';

export const CardProfileContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  display: flex;
  gap: 3.2rem;
  margin-top: -6rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

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

  p {
    margin-bottom: 2.4rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;

  ul {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    flex-wrap: wrap;

    li {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }
  }
`;
