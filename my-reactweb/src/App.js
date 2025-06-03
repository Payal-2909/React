// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

// }

// export default App;
/*import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExampleComponent />);
export default ExampleComponent;/*

//syntax
//to install packages: npm install packagename
//to uninstall packages: npm uninstall packagename
//to update packages: npm update packagename
//to check version of a package: npm cowsay-v*/

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// React.createElement(
//   'h1',
//   2909,
//   'Hello, World!',
//   'h2',
//   'payal'
// );
// export default function Element() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>This is a simple React application.</p>
//             {/* <h2>Hello Payal</h2>
//             <p>Welcome to the React world!</p> */}
//     </div>
//   );
// }
//import React from 'react';

/*export default function Element() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
       <h2>Hello Payal</h2>
      <p>Welcome to the React world!</p>
    </div>
  );
}*/

//hooks components using useState and useEffect
/*import React, { useState } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      function incrementCount() {
        setCount(count + 1);
      }

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      );
    }
    export default Example;*/
    /*import React, { useState, useEffect } from 'react';

    function Example() {
      const [data, setData] = useState(null);

      useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => setData(json));
}, []);

return (
  <div>
    {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
  </div>
);
// ...existing code...
    }
    export default Example;*/
    // Example: useEffect to update the document title and clean up a timer

/*import React, { useState, useEffect } from "react";

    function timer() {
    const [count, setCount] = useState(0);

    // Runs after every render
    useEffect(() => {
        document.title = `Count: ${count}`;
        // Cleanup function (like componentWillUnmount)
        return () => {
            console.log("Cleanup before next effect or unmount");
        };
    }, [count]); // Only runs when 'count' changes

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
export default timer;*/

import { useState, useEffect, use } from 'react';

        function useFetch(url) {
      const [data, setData] = useState(null);
    
      useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(json => setData(json));
      }, [url]);
    
      return data;
    }
    
    function WeatherComponent() {
      const data = useFetch(
        'https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true'
      );
    
      return (
        <div>
          {data && data.current_weather ? (
            <p>
              Temperature: {data.current_weather.temperature}°C<br />
              Windspeed: {data.current_weather.windspeed} km/h
            </p>
          ) : (
            <p>Loading weather...</p>
          )}
        </div>
      );
    }
    
    export default   WeatherComponent;
