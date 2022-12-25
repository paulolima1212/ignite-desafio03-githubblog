import { useForm } from 'react-hook-form';
import { RegularText, TitleText } from '../../../../Components/typography';
import { FieldSearchContainer, HeaderFieldSearch, InputSearch } from './styles';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getIssues } from '../../../../Services/HTTP/Gets/getIssues';
import { usePostContext } from '../../../../Hooks/usePostContext';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function FieldSearch() {
  const { getPosts, posts } = usePostContext();

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchPost({ query }: SearchFormInput) {
    getPosts(query);
  }

  return (
    <FieldSearchContainer onSubmit={handleSubmit(handleSearchPost)}>
      <HeaderFieldSearch>
        <TitleText color='title'>Publications</TitleText>
        <RegularText color='label'>{`${posts.length} publications`}</RegularText>
      </HeaderFieldSearch>
      <InputSearch
        {...register('query')}
        type='text'
        placeholder='Find a content'
      />
    </FieldSearchContainer>
  );
}
