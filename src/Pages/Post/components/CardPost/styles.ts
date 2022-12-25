import styled from 'styled-components';

export const CardPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 16.8rem;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5.5rem;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    gap: 3.2rem;
    margin-top: 0.8rem;

    li {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }
  }
`;
