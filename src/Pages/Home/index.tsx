import { CardProfile } from './components/CardProfile';
import { Header } from '../../Components/Header';
import { TitleText } from '../../Components/typography';
import { ContentContainer, HomeContainer, HomeContent } from './styles';
import { Link } from '../../Components/Link';
import { ArrowArcRight } from 'phosphor-react';
import { FieldSearch } from './components/FieldSearch';
import { CardContent } from './components/CardContent';

export function Home() {
  return (
    <HomeContainer>
      <HomeContent className='container'>
        <CardProfile />
        <FieldSearch />
        <ContentContainer>
          <CardContent />
          <CardContent />
          <CardContent />
          <CardContent />
        </ContentContainer>
      </HomeContent>
    </HomeContainer>
  );
}
