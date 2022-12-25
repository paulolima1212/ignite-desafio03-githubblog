import { useContext } from 'react';
import { PostContext } from '../Contexts/postContext';

export function usePostContext() {
  return useContext(PostContext);
}
