// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.
import { useState } from "react";

function ParentComponent() {
  const [favoriteColor, setFavoriteColor] = useState("");

  const handleColorChange = (color) => {
    setFavoriteColor(color);
  };

  return (
    <div>
      <ChildComponent onColorChange={handleColorChange} />
      <h2>Your favourite colour:</h2>
      <p>{favoriteColor}</p>
    </div>
  );
}

function ChildComponent({ onColorChange }) {
  
  const handleChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      <option value="Yellow">Yellow</option>
    </select>
  );
}



function App() {
  return <div>
    <ParentComponent />
  </div>;
}

export default App;
