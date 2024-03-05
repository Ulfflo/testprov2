// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

import { useState } from "react";

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

function EmailEditor() {
  const [email, setEmail] = useState("ulf_floden@hotmail.com");
  const [editMode, setEditMode] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  const handleEditClick = () => {
    setEditMode(true);
    setNewEmail(email); 
  };

  const handleSaveClick = () => {
    setEmail(newEmail); 
    setEditMode(false); 
  };

  const handleChange = (e) => {
    setNewEmail(e.target.value); 
  };

  return (
    <div>
      {editMode ? (
        <>
          <input type="text" value={newEmail} onChange={handleChange} />
          <button onClick={handleSaveClick}>Spara</button>
        </>
      ) : (
        <>
          <p>{email}</p>
          <button onClick={handleEditClick}>Redigera</button>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Uppdatera E-post</h2>
      <EmailEditor />
    </div>
  );
}

export default App;