import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  background: ${({ theme }) => theme.colors['base-background']};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 23.4rem;
  padding: 0 1.5rem;
`;

export const HomeContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 3.2rem;
  margin-top: 4.8rem;
`;
