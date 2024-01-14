import { useState, useReducer } from "react";
import { faker } from "@faker-js/faker";
import styles from "./App.module.css";
import PostComment from "./components/PostComment";
import CommentSection from "./components/CommentSection";

const initialValues = {
  name: "",
  userid: "",
  avatar: null,
  likesCount: null,
  disLikeCount: null,
  commentDate: "",
  level: 0,
  comment: "",
  reply: [],
  // status: "initialPost",
};

function App() {
  const [commentTree, setCommentTree] = useState([]);
  const avatarUrl = faker.image.avatar();
  const currentDate = new Date();
  const [
    {
      avatar,
      userName,
      userid,
      likesCount,
      disLikeCount,
      commentDate,
      level,
      comment,
      reply,
      diffDay,
    },
    dispatch,
  ] = useReducer(reduce, initialValues);

  function reduce(state, action) {
    switch (action.type) {
      case "Createpost":
        return {
          ...state,
          comment: action.payload,
          userid: faker.string.uuid(),
          userName: faker.internet.userName(),
          commentDate: faker.date.recent(),
          level: 0,
          // status: "postCreated",
          avatar: avatarUrl,
        };
    }
  }

  const handlePost = (e) => {
    e.preventDefault();
    setCommentTree((state) => [
      ...state,
      {
        comment: comment,
        userName: userName,
        avatar: avatar,
        userid: userid,
        commentDate: commentDate,
        level: level,
        reply: [],
      },
    ]);
  };

  return (
    <div className={styles.commentSection}>
      <PostComment
        dispatch={dispatch}
        handlePost={handlePost}
        avatar={avatarUrl}
      ></PostComment>

      <CommentSection commentTree={commentTree}></CommentSection>
    </div>
  );
}

export default App;
