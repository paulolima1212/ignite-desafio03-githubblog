import { useParams } from 'react-router-dom';
import { getIssues } from '../Services/HTTP/Gets/getIssues';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { getPost } from '../Services/HTTP/Gets/getPost';

interface PostContextProps {
  posts: PostsProps[];
  getPosts: (value: string) => void;
}

export interface PostsProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export const PostContext = createContext({} as PostContextProps);

export function PostContextProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  async function getPosts(query: string = '') {
    const data = await getIssues(query);
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider value={{ getPosts, posts }}>
      {children}
    </PostContext.Provider>
  );
}
