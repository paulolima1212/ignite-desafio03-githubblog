import {
  GithubLogo,
  Buildings,
  UsersThree,
  ArrowElbowUpRight,
} from 'phosphor-react';
import { LinkText, RegularText, TitleText } from '../typography';
import {
  CardContent,
  CardProfileContainer,
  HeaderContainer,
  IconsContainer,
} from './styles';

export function CardProfile() {
  return (
    <CardProfileContainer className='container'>
      <img
        src='https://s3-alpha-sig.figma.com/img/c460/226f/8a0e7a6ab75fc2eabd9a0a9ae72f8ea0?Expires=1672617600&Signature=HvLtLvIRo~ZbofF3aSOEzVtb5CHOM8SfGC6zfHChg-KN~gYEuA~p5Svkf9H~Kk0nX~gvGZ8MO5V8tcMJrWR-iKDo1rI893hfzlBbaqGkYWs30LmEBIo~U2LCi8KtDT0jSTzA6AH1dTdoUWu2VO8-kpf5t55juIQxOe3Zg-BTGxHxWOC9g9nmqPGBkcGpQYY2ChNUlelZYXRw~5xutA-mEDeabTWIlC4SIFseOBNE0wyKdh8UZqsb10~5~Hav1sxHOoNSBkz1bI8jq5445dVHfLa12g29oQTwFJZ0qyIU7NOaU2iLkSTpTXpfNXi7s-GsSXWp4ts4haQApxnt98CQzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        alt=''
      />
      <CardContent>
        <HeaderContainer>
          <TitleText size='l' color='title'>
            Cameron Lima
          </TitleText>
          <LinkText>
            github <ArrowElbowUpRight />
          </LinkText>
        </HeaderContainer>
        <RegularText>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </RegularText>
        <IconsContainer>
          <span>
            <GithubLogo weight='fill' /> plima1212
          </span>
          <span>
            <Buildings weight='fill' /> plima1212
          </span>
          <span>
            <UsersThree weight='fill' /> plima1212
          </span>
        </IconsContainer>
      </CardContent>
    </CardProfileContainer>
  );
}
