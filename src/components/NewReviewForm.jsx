import { useState } from "react";

const NewReviewForm = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const _handleChange = (e) => {
    setInputText(e.target.value);
  };

  const _handleClick = () => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        data-testid="reviewText"
        value={inputText}
        onChange={_handleChange}
      />
      <button type="button" data-testid="submitButton" onClick={_handleClick}>
        Submit
      </button>
    </div>
  );
};

export default NewReviewForm;
