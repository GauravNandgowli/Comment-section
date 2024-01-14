import styles from "./PostComment.module.css";
import Avatar from "./Avatar";
import TextArea from "./TextArea";
import Button from "./Button";

function PostComment({ dispatch, handlePost, avatar }) {
  return (
    <form className={styles.PostComment}>
      <div className={styles.avatarSection}>
        <Avatar avatar={avatar}></Avatar>
      </div>
      <div className={styles.editable}>
        <div className={styles.textarea}>
          <TextArea
            placeholder="What Are Your Thoughts"
            dispatch={dispatch}
          ></TextArea>
        </div>
        <span>
          <Button type="post" handlePost={handlePost}></Button>
        </span>
      </div>
    </form>
  );
}

export default PostComment;
