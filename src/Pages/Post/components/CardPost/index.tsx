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
import { useNavigate, useParams } from 'react-router-dom';
import { DateFormat } from '../../../../Utils/Formatter';
import { Spinner } from '../../../../Components/Spinner';
import { usePostContext } from '../../../../Hooks/usePostContext';
import { PostsProps } from '../../../../Contexts/postContext';

interface CardPostProps {
  isLoading: boolean;
  postData: PostsProps;
}

export function CardPost({ isLoading, postData }: CardPostProps) {
  const { colors } = useTheme();
  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <CardPostContainer>
      <header>
        <Link
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text='back'
          as='button'
          onClick={() => navigate(-1)}
        />
        <Link
          icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
          text='see on github'
          as='a'
          href={postData.html_url}
          target='_blank'
        />
      </header>
      <TitleText color='title'>{postData.title}</TitleText>
      <footer>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} color={colors['base-label']} />
            <RegularText color='label'>{postData.user.login}</RegularText>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              color={colors['base-label']}
            />
            <RegularText color='label'>
              {DateFormat(new Date(postData.created_at))}
            </RegularText>
          </li>

          <li>
            <FontAwesomeIcon icon={faComment} color={colors['base-label']} />
            <RegularText color='label'>
              {postData.comments} comments
            </RegularText>
          </li>
        </ul>
      </footer>
    </CardPostContainer>
  );
}
