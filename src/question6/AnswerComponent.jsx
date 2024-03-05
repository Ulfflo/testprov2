import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "./questionSlice";

function AnswerComponent() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question.question);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setAnswer(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h2>Question: {question}</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit Answer</button>
      <div>Answer: {useSelector((state) => state.question.answer)}</div>
    </div>
  );
}

export default AnswerComponent;
