import { posts, PostType } from '../../../assets/posts';
import { Post } from '../Post/Post';

import classes from './Feed.module.css';

export const Feed = ({ createdPosts }: { createdPosts: PostType[] }) => {

  // posts - prethodna dummy data(od prethdnata sesija koga sumn bil logiran, ralen slucaj)
  // createdPosts = koi se kreirani od vas ili da se nova verzija(od drugite)
  // na kraj da gi merge vo edna niza
  let combinedData: PostType[] = [...posts, ...createdPosts];
  localStorage.setItem("feedData", JSON.stringify(combinedData));

  return (
    <div className={classes.GalleryFeed}>
      {combinedData.length > 0 && combinedData
        .filter((post) => post.userName?.length !== 0)
        .map((post, index) => (
          <Post key={index} {...post}></Post>
        ))}
    </div>
  );
};
