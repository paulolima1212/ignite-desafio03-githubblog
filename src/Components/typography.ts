import styled from 'styled-components';

interface TitleTextProps {
  size?: 'l' | 'm' | 's';
  color?: 'title' | 'subtitle' | 'text';
}

export const TitleText = styled.h1<TitleTextProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-title-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  line-height: 1.3;
`;

interface RegularTextProps {
  size?: 'l' | 'm' | 's';
  color?: 'label' | 'span' | 'text';
}

export const RegularText = styled.p<RegularTextProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  line-height: 1.3;
`;

export const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1.2rem;
  line-height: 1.6;
  text-transform: uppercase;
`;
