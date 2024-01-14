import { useState, useReducer } from "react";
import { faker } from "@faker-js/faker";
import styles from "./App.module.css";
import PostComment from "./components/PostComment";
import CommentSection from "./components/CommentSection";
import Reply from "./components/Reply";
import Avatar from "./components/Avatar";

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
  status: "initialPost",
};

function App() {
  const [commentTree, setCommentTree] = useState([
    {
      comment: "hello",
      userName: "Chelsie.Prohaska18",
      avatar: "https://avatars.githubusercontent.com/u/85927003",
      userid: faker.string.uuid(),
      commentDate: "2024-01-14T00:50:23.994Z",
      level: 0,
      reply: [],
    },
    {
      comment: "i am gaurav",
      userName: "Eldred16",
      avatar: "https://avatars.githubusercontent.com/u/99700125",
      userid: faker.string.uuid(),
      commentDate: "2024-01-14T03:56:32.113Z",
      level: 0,
      reply: [
        {
          comment: "this is Boss",
          userName: "Chelsie.Prohaska18",
          avatar: "https://avatars.githubusercontent.com/u/85927003",
          userid: faker.string.uuid(),
          commentDate: "2024-01-14T00:50:23.994Z",
          level: 1,
          reply: [
            {
              comment: "this is Gaurv",
              userName: "Chelsie.Prohaska18",
              avatar: "https://avatars.githubusercontent.com/u/85927003",
              userid: faker.string.uuid(),
              commentDate: "2024-01-14T00:50:23.994Z",
              level: 2,
              reply: [
                {
                  comment: "this is chetan",
                  userName: "Chelsie.Prohaska18",
                  avatar: "https://avatars.githubusercontent.com/u/85927003",
                  userid: faker.string.uuid(),
                  commentDate: "2024-01-14T00:50:23.994Z",
                  level: 2,
                  reply: [
                    {
                      comment: "comment to  chetan",
                      userName: "Chelsie.Prohaska18",
                      avatar:
                        "https://avatars.githubusercontent.com/u/85927003",
                      userid: faker.string.uuid(),
                      commentDate: "2024-01-14T00:50:23.994Z",
                      level: 2,
                      reply: [],
                    },
                  ],
                },
                {
                  comment: "this is naina",
                  userName: "Chelsie.Prohaska18",
                  avatar: "https://avatars.githubusercontent.com/u/85927003",
                  userid: faker.string.uuid(),
                  commentDate: "2024-01-14T00:50:23.994Z",
                  level: 2,
                  reply: [],
                },
              ],
            },
            {
              comment: "this is Gaurav Nandgowli",
              userName: "Chelsie.Prohaska18",
              avatar: "https://avatars.githubusercontent.com/u/85927003",
              userid: faker.string.uuid(),
              commentDate: "2024-01-14T00:50:23.994Z",
              level: 2,
              reply: [],
            },
          ],
        },
      ],
    },
    {
      comment: "this is my trying\n",
      userName: "Malvina_Huel38",
      avatar: "https://avatars.githubusercontent.com/u/59307865",
      userid: faker.string.uuid(),
      commentDate: "2024-01-13T14:58:57.424Z",
      level: 0,
      reply: [],
    },
  ]);
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
      status,
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
          status: "postCreated",
          avatar: avatarUrl,
        };

      case "reply":
        return {
          ...state,
          status: "reply",
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

  function handleReply(e) {
    dispatch({ type: "reply" });
  }

  return (
    <div className={styles.commentSection}>
      <PostComment
        dispatch={dispatch}
        handlePost={handlePost}
        avatar={avatarUrl}
      ></PostComment>

      <CommentSection
        handleReply={handleReply}
        commentTree={commentTree}
        status={status}
      ></CommentSection>

      {status === "reply" && <Reply></Reply>}
      {console.log(commentTree)}
    </div>
  );
}

export default App;
