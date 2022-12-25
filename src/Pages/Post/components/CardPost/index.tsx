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
import { useNavigate } from 'react-router-dom';
import { DateFormat } from '../../../../Utils/Formatter';

export function CardPost() {
  const { colors } = useTheme();

  const navigate = useNavigate();

  return (
    <CardPostContainer>
      <header>
        <Link
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text='back'
          variant='button'
          onClick={navigate(-1)}
        />
        <Link
          icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
          text='see on github'
          variant='a'
          href='https://github.com/paulolima1212'
          target='_blank'
        />
      </header>
      <TitleText color='title'>
        JavaScript data types and data structures
      </TitleText>
      <footer>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} color={colors['base-label']} />
            <RegularText color='label'>paulolima1212</RegularText>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              color={colors['base-label']}
            />
            <RegularText color='label'>{Date.now()}</RegularText>
          </li>

          <li>
            <FontAwesomeIcon icon={faComment} color={colors['base-label']} />
            <RegularText color='label'>5 comments</RegularText>
          </li>
        </ul>
      </footer>
    </CardPostContainer>
  );
}
