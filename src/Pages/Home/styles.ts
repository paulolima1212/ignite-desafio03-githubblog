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
`;

export const HomeContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
