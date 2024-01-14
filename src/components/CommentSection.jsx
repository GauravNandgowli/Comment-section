import styles from "./CommentSection.module.css";
import CommentComponent from "./CommentComponent";
import Reply from "./Reply";
import { useState } from "react";
import Button from "./Button";

function CommentSection({ commentTree, handleReply, status }) {
  const [checkreply, setCheckReply] = useState(false);
  return (
    <div className={styles.commentSection}>
      {commentTree.map((comment) => {
        return (
          <CommentComponent
            key={comment.userid}
            comment={comment}
            handleReply={handleReply}
          />
        );
      })}
    </div>
  );
}

export default CommentSection;
