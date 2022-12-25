import { useEffect, useState } from 'react';
import { CardPost } from './components/CardPost';
import { PostContent } from './components/PostContent';
import { PostContainer } from './styles';
import { PostsProps } from '../../Contexts/postContext';
import { useParams } from 'react-router-dom';
import { getPost } from '../../Services/HTTP/Gets/getPost';

export function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState({} as PostsProps);

  const { id } = useParams();

  async function handlerGetPost() {
    const data = await getPost(id!);
    setPostData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    handlerGetPost();
  }, []);
  return (
    <PostContainer>
      <CardPost isLoading={isLoading} postData={postData} />
      <PostContent postContent={postData.body} />
    </PostContainer>
  );
}
