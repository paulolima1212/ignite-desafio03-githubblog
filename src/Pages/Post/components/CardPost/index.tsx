import { CardPostContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faUpRightFromSquare,
  faCalendarAlt,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from '../../../../Components/Link';
import { RegularText, TitleText } from '../../../../Components/typography';
import { useTheme } from 'styled-components';

export function CardPost() {
  const { colors } = useTheme();

  return (
    <CardPostContainer>
      <header>
        <Link
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text='back'
          variant='button'
        />
        <Link
          icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
          text='see on github'
          variant='a'
        />
      </header>
      <TitleText color='title'>
        JavaScript data types and data structures
      </TitleText>
      <footer>
        <ul>
          <li>
            <FontAwesomeIcon
              size='2x'
              icon={faGithub}
              color={colors['base-label']}
            />
            <RegularText color='label'>paulolima1212</RegularText>
          </li>
          <li>
            <FontAwesomeIcon
              size='2x'
              icon={faCalendarAlt}
              color={colors['base-label']}
            />
            <RegularText color='label'>About 1 day</RegularText>
          </li>

          <li>
            <FontAwesomeIcon
              size='2x'
              icon={faComment}
              color={colors['base-label']}
            />
            <RegularText color='label'>5 comments</RegularText>
          </li>
        </ul>
      </footer>
    </CardPostContainer>
  );
}
