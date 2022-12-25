import { api } from '../../../Libs/axios.config';

const userName = import.meta.env.VITE_GITHUB_USER_NAME;

export interface DataProfileProps {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: string;
}

export async function getProfile() {
  const data: DataProfileProps = await (
    await api.get(`users/${userName}`)
  ).data;

  return data;
}
