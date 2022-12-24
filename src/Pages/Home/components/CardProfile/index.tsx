import { RegularText, TitleText } from '../../../../Components/typography';
import {
  CardContent,
  CardProfileContainer,
  HeaderContainer,
  IconsContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../../../Components/Link';
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from 'styled-components';

export function CardProfile() {
  const { colors } = useTheme();

  return (
    <CardProfileContainer className='container'>
      <img src='https://github.com/paulolima1212.png' alt='' />
      <CardContent>
        <HeaderContainer>
          <TitleText size='l' color='title'>
            Paulo Lima
          </TitleText>
          <Link
            icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
            text='github'
            variant='a'
            href={'#'}
          />
        </HeaderContainer>
        <RegularText>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </RegularText>
        <IconsContainer>
          <ul>
            <li>
              <FontAwesomeIcon color={colors['base-label']} icon={faGithub} />{' '}
              paulolima1212
            </li>
            <li>
              <FontAwesomeIcon color={colors['base-label']} icon={faBuilding} />{' '}
              RocketSeat
            </li>
            <li>
              <FontAwesomeIcon
                color={colors['base-label']}
                icon={faUserGroup}
              />{' '}
              32 Flowers
            </li>
          </ul>
        </IconsContainer>
      </CardContent>
    </CardProfileContainer>
  );
}
