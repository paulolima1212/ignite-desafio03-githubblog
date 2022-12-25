import { RegularText, TitleText } from '../../../../Components/typography';
import { PostsProps } from '../../../../Contexts/postContext';
import { DateFormat } from '../../../../Utils/Formatter';
import { CardContentContainer } from './styles';

export function CardContent({ post }: { post: PostsProps }) {
  const timeAbout = DateFormat(new Date(post.created_at));

  return (
    <CardContentContainer to={`/post/${post.number}`}>
      <header>
        <TitleText color='title'>{post.title}</TitleText>
        <RegularText color='label' size='s'>
          {timeAbout}
        </RegularText>
      </header>
      <RegularText>{post.body}</RegularText>
    </CardContentContainer>
  );
}
