import CommentComponent from "./CommentComponent";
import PostComment from "./PostComment";
import styles from "./Reply.module.css";

function Reply() {
  return (
    <dialog>
      <PostComment></PostComment>
    </dialog>
  );
}

export default Reply;
