import { ComponentProps, ReactNode } from 'react';
import { LinkContainer } from './styles';

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string;
  icon?: ReactNode;
};

export function Link({ text, icon, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest}>
      {rest.as === 'button' && icon}
      <span>{text}</span>
      {rest.as === 'a' && icon}
    </LinkContainer>
  );
}
