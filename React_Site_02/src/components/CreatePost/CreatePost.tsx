import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./CreatePost.module.css";
import { User } from "./types";
import { PostType } from "../../assets/posts";

export const CreatePost = ({ onNewCreatedPost }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  // individual states
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");

  // combined, object state
  const [newPost, setNewPost] = useState<PostType>({
    userName: "",
    title: "",
    description: "",
    dateCreated: "",
    imgUrl: "",
  });
  const [userList, setUserList] = useState<User[]>([]);

  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    console.log("target input field:", e.target.name);
    const inputName = e.target.name;
    const inputValue = e.target.value.trim();
    const dateCreated = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    const titleValue = newPost["title"];
    const titleValueSecond = newPost.title;
    //
    setNewPost({
      ...newPost,
      [inputName]: inputValue,
      dateCreated: dateCreated,
    });
  };

  const onPostSubmit = (e) => {
    e.preventDefault();
    onNewCreatedPost(newPost);
    // reset form
    setNewPost({
      userName: "",
      title: "",
      description: "",
      dateCreated: "",
      imgUrl: "",
    });
  };

  useEffect(() => {
    let isButtonDisabled = true;
    if (
      newPost.userName.length !== 0 &&
      newPost.description.length !== 0 &&
      newPost.title.length !== 0 &&
      newPost.imgUrl.length !== 0
    ) {
      isButtonDisabled = false;
    }
    setIsDisabled(isButtonDisabled);
  }, [newPost]);

  const loadData = (e: any) => {
    console.log(e);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setUserList(response);
      });
  };

  return (
    <div className={styles.CreateForm}>
      <span className={styles.FormTitle}>Enter a new post</span>
      <form onSubmit={(e) => onPostSubmit(e)}>
        <label>
          Post Title:
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label>
          Post Description:
          <input
            type="text"
            name="description"
            value={newPost.description}
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label>
          User:
          <select
            name="userName"
            value={newPost.userName}
            onClick={(e) => loadData(e)}
            onChange={(e) => handleInput(e)}
          >
            <option value={newPost.userName}>Select user</option>
            {userList.map((user) => {
              return (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imgUrl"
            value={newPost.imgUrl}
            onChange={(e) => handleInput(e)}
          />
        </label>
        <button
          disabled={isDisabled}
          type="submit"
          className={styles.SubmitButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
