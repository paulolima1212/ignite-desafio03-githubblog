import { HeaderContainer, HeaderContent } from './styles';
import cover from '../../assets/cover.svg';
import { TitleText } from '../typography';

export function Header() {
  return (
    <HeaderContainer>
      <img src={cover} alt='' />
    </HeaderContainer>
  );
}
