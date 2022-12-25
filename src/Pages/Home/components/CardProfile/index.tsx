import { RegularText, TitleText } from '../../../../Components/typography';
import {
  CardContent,
  CardProfileContainer,
  HeaderContainer,
  IconsContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../../../Components/Link';
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from 'styled-components';
import {
  DataProfileProps,
  getProfile,
} from '../../../../Services/HTTP/Gets/getProfile';
import { useEffect, useState } from 'react';

export function CardProfile() {
  const { colors } = useTheme();

  const [dataProfile, setDataProfile] = useState({} as DataProfileProps);

  async function GetDataProfile() {
    const data = await getProfile();
    setDataProfile(data);
  }

  useEffect(() => {
    GetDataProfile();
  }, []);

  return (
    <CardProfileContainer className='container'>
      <img src={dataProfile.avatar_url} alt='' />
      <CardContent>
        <HeaderContainer>
          <TitleText size='l' color='title'>
            {dataProfile.name}
          </TitleText>
          <Link
            icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
            text='github'
            variant='a'
            href={dataProfile.html_url}
            target='_blank'
          />
        </HeaderContainer>
        <RegularText>{dataProfile.bio}</RegularText>
        <IconsContainer>
          <ul>
            <li>
              <FontAwesomeIcon color={colors['base-label']} icon={faGithub} />{' '}
              {dataProfile.login}
            </li>
            {dataProfile.company && (
              <li>
                <FontAwesomeIcon
                  color={colors['base-label']}
                  icon={faBuilding}
                />
                {dataProfile.company}
              </li>
            )}
            <li>
              <FontAwesomeIcon
                color={colors['base-label']}
                icon={faUserGroup}
              />
              {dataProfile.followers} Flowers
            </li>
          </ul>
        </IconsContainer>
      </CardContent>
    </CardProfileContainer>
  );
}
