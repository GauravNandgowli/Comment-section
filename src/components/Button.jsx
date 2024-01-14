import styles from "./Button.module.css";

function Button({ type, handlePost, handleReply }) {
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        handlePost ? handlePost(e) : handleReply(e);
      }}
    >
      {type}
    </button>
  );
}

export default Button;
