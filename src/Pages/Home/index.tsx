import { CardProfile } from '../../Components/CardProfile';
import { Header } from '../../Components/Header';
import { TitleText } from '../../Components/typography';
import { HomeContainer, HomeContent } from './styles';

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
