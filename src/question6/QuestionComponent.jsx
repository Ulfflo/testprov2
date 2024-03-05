import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";

function QuestionComponent() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setQuestion(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit Question</button>
    </div>
  );
}

export default QuestionComponent;
