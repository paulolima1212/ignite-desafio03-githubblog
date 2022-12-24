import { ComponentProps, ReactNode } from 'react';
import { LinkContainer } from './styles';

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string;
  icon: ReactNode;
  variant: 'button' | 'a';
};

export function Link({ text, icon, variant = 'a' }: LinkProps) {
  return (
    <LinkContainer as={variant}>
      {variant === 'button' && icon}
      <span>{text}</span>
      {variant === 'a' && icon}
    </LinkContainer>
  );
}
