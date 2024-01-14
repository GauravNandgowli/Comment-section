import styles from "./CommentComponent.module.css";
import Button from "./Button";
import { useRef } from "react";

function CommentComponent({ comment, handleReply, key }) {
  const currentDate = new Date();
  const commentDate = new Date(comment.commentDate);

  const diffTime = Math.abs(currentDate - commentDate);
  const diffSeconds = diffTime / 1000;
  const diffMinutes = diffSeconds / 60;
  const diffHours = diffMinutes / 60;
  const diffDays = diffHours / 24;
  const diffMonths = diffDays / 30.44; // Average number of days in a month
  const diffYears = diffDays / 365.25; // Average number of days in a year

  let timeDifference;
  if (diffYears >= 1) {
    timeDifference = `${Math.round(diffYears)} years ago`;
  } else if (diffMonths >= 1) {
    timeDifference = `${Math.round(diffMonths)} months ago`;
  } else if (diffDays >= 1) {
    timeDifference = `${Math.round(diffDays)} days ago`;
  } else if (diffHours >= 1) {
    timeDifference = `${Math.round(diffHours)} hours ago`;
  } else if (diffMinutes >= 1) {
    timeDifference = `${Math.round(diffMinutes)} minutes ago`;
  } else {
    timeDifference = `${Math.round(diffSeconds)} seconds ago`;
  }

  const width = `calc(100% - ${comment.level * 1}em)`;

  return (
    <>
      <div className={styles.comment} style={{ width }}>
        <div className={styles.commentComponent}>
          <span className={styles.avatarSection}>
            <img src={comment.avatar} className={styles.avatar} />
          </span>
          <div className={styles.body}>
            <div className={styles.commentHeader}>
              <span className={styles.userName}>
                <a>{comment.userName}</a>
              </span>
              <span className={styles.timeDiff}>{timeDifference}</span>
            </div>
            <div className={styles.commentBox}>
              <p className={styles.commentText}>{comment.comment}</p>
            </div>
            <span className={styles.btn}>
              <Button handleReply={handleReply} type="reply"></Button>
            </span>
          </div>
        </div>
        {comment.reply.length > 0
          ? comment.reply.map((replyComment) => {
              return (
                <CommentComponent
                  key={replyComment.userid}
                  comment={replyComment}
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default CommentComponent;
