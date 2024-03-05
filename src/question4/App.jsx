// 4. Dela Favoritfärg med Context 3p
// Skapa en applikation som använder React Context för att hantera och
// dela en användares val av favoritfärg mellan komponenter.
// Applikationen ska bestå av två huvudkomponenter: ColorSelector och ColorDisplay.

// Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

// Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

// Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.

// Genom att använda React Context kan du skapa en tät koppling mellan
// ColorSelector och ColorDisplay utan att direkt skicka props eller använda callbacks.

import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState("");
  const { setColor } = useContext(ColorContext);

  const handleChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    setColor(color);
  };

  return (
    <div>
      <h2>Choose your favourite colour:</h2>
      <select onChange={handleChange} value={selectedColor}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
      </select>
    </div>
  );
}

function ColorDisplay() {
  const { color } = useContext(ColorContext);

  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: color }}
      ></div>
    </div>
  );
}

function App() {
  const [color, setColor] = useState("red");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <div>
        <ColorSelector />
        <ColorDisplay />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
