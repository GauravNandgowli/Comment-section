import styles from "./Button.module.css";

function Button({ type, handlePost }) {
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        handlePost(e);
      }}
    >
      {type}
    </button>
  );
}

export default Button;
