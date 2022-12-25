import { PostsProps } from '../../../Contexts/postContext';
import { api } from '../../../Libs/axios.config';

const userName = import.meta.env.VITE_GITHUB_USER_NAME;
const repoName = import.meta.env.VITE_GITHUB_REPO_NAME;

export async function getPost(id: string) {
  const data: PostsProps = await (
    await api.get(`/repos/${userName}/${repoName}/issues/${id}`)
  ).data;

  return data;
}
