// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.

// Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
// Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
// och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.

// Exempel på användning:

// function UserList() {
//   const { data, isLoading } = useFetchData(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   if (isLoading) return <div>Laddar...</div>;
//   return (
//     <ul>
//       {data.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// function App() {
//   return <div></div>;
// }

// export default App;

import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    
        const response = await fetch(url);
        
        const data = await response.json();
        setData(data);
        setIsLoading(false);
    }

    fetchData();

     
  }, []);

  return { data, isLoading };
}

function UserList() {
  const { data, isLoading } = useFetchData(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (isLoading) { return <div>Laddar...</div>;
  } else {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}}

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;
