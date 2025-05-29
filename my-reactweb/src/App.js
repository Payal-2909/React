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
import React from 'react';

export default function Element() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
       <h2>Hello Payal</h2>
      <p>Welcome to the React world!</p>
    </div>
  );
}