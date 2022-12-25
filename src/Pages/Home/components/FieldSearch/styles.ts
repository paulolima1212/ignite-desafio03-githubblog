import styled from 'styled-components';

export const FieldSearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7.2rem;
  gap: 1.2rem;
`;

export const HeaderFieldSearch = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputSearch = styled.input`
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;
