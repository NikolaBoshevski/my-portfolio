import React, { useEffect, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const  Posts = () => {
  const res =  useFetch<Post>('https://jsonplaceholder.typicode.com/posts');
  const {data, loading, error} = res
  console.log('data', data)
  console.log('loading', loading)
  console.log('error', error)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {data.map((item: Post) => {
        return <li key={item.title}>{item.title}</li>;
      })}
    </ul>
  );
};
