import { PostsProps } from '../../../Contexts/postContext';
import { api } from '../../../Libs/axios.config';

const userName = import.meta.env.VITE_GITHUB_USER_NAME;
const repoName = import.meta.env.VITE_GITHUB_REPO_NAME;

export async function getIssues(query: string) {
  const data: PostsProps[] = await (
    await api.get(`search/issues?q=${query}%20repo:${userName}/${repoName}`)
  ).data.items;

  return data;
}
