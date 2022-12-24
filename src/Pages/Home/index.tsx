import { CardProfile } from './components/CardProfile';
import { Header } from '../../Components/Header';
import { TitleText } from '../../Components/typography';
import { HomeContainer, HomeContent } from './styles';
import { Link } from '../../Components/Link';
import { ArrowArcRight } from 'phosphor-react';

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent className='container'>
        <CardProfile />
      </HomeContent>
    </HomeContainer>
  );
}
