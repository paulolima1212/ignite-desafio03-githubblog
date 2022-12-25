import { CardPost } from './components/CardPost';
import { PostContent } from './components/PostContent';
import { PostContainer } from './styles';

export function Post() {
  return (
    <PostContainer>
      <CardPost />
      <PostContent />
    </PostContainer>
  );
}
