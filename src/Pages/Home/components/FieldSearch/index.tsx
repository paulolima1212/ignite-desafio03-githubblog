import { RegularText, TitleText } from '../../../../Components/typography';
import { FieldSearchContainer, HeaderFieldSearch, InputSearch } from './styles';

export function FieldSearch() {
  return (
    <FieldSearchContainer>
      <HeaderFieldSearch>
        <TitleText color='title'>Publications</TitleText>
        <RegularText color='label'>6 publications</RegularText>
      </HeaderFieldSearch>
      <InputSearch type='text' placeholder='Find a content' />
    </FieldSearchContainer>
  );
}
