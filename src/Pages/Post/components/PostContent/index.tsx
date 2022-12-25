import { Link } from '../../../../Components/Link';
import { RegularText } from '../../../../Components/typography';
import { PostContentContainer } from './styles';

export function PostContent() {
  return (
    <PostContentContainer>
      <RegularText>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </RegularText>

      <Link variant='a' text='Dynamic typing' />

      <RegularText>
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </RegularText>
    </PostContentContainer>
  );
}
