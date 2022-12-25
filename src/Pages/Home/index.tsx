import { CardProfile } from './components/CardProfile';
import { ContentContainer, HomeContainer, HomeContent } from './styles';
import { FieldSearch } from './components/FieldSearch';
import { CardContent } from './components/CardContent';
import { usePostContext } from '../../Hooks/usePostContext';

export function Home() {
  const { posts } = usePostContext();

  return (
    <HomeContainer>
      <HomeContent className='container'>
        <CardProfile />
        <FieldSearch />
        <ContentContainer>
          {posts.map((post) => {
            return <CardContent key={post.number} post={post} />;
          })}
        </ContentContainer>
      </HomeContent>
    </HomeContainer>
  );
}
