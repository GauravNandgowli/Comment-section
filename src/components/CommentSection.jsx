import styles from "./CommentSection.module.css";
import CommentComponent from "./CommentComponent";

function CommentSection({ commentTree }) {
  return (
    <div className={styles.commentSection}>
      {commentTree.map((comment) => {
        return (
          <CommentComponent
            key={comment.userid}
            comment={comment}
          ></CommentComponent>
        );
      })}
    </div>
  );
}

export default CommentSection;
