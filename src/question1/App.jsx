// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

import { useState } from "react";

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.



function App() {
  const [comments, setComments] = useState([]);
  const [inputText, setInputText] = useState("");

  const addComment = () => {
    if (inputText.trim() !== "") {
      setComments([...comments, inputText]);
      setInputText("");
    }
  };

  const removeComment = (indexToRemove) => {
    const newComments = comments.filter(
      (_, index) => index !== indexToRemove
    );
    setComments(newComments);
  };

  return (
    <div>
      <h2>Kommentarer</h2>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addComment}>Lägg till</button>
      </div>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => removeComment(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

