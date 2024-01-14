import styles from "./TextArea.module.css";
import { useState } from "react";

function TextArea({ placeholder, value, dispatch }) {
  const [inputValue, setInputValue] = useState(value);

  const handleComment = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    dispatch({ type: "Createpost", payload: inputValue });

    setInputValue("");
  };

  return (
    <textarea
      className={styles.textarea}
      value={inputValue}
      placeholder={placeholder}
      onBlur={handleBlur}
      onChange={(e) => handleComment(e)}
    ></textarea>
  );
}

export default TextArea;
