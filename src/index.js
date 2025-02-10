import React from "react";
import ReactDOM from "react-dom/client";
// import pizzaData from './data';

const App = () => {
    return (
        <div>
          <Header />
          <Menu />
          <Footer />
        </div>
  );
}

const Pizza = () => {
  return (
    <div>
      <img alt="Pizza"></img>
      <h1>Pizza</h1>
      <p>Ingridients</p>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h1>Pizzaria Name</h1>
    </div>
  );
}

const Menu = () => {
  return (
    <div>
      <h2>Menu: </h2>
      <Pizza />
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <footer>Footer</footer>
    </div>
  );
}

// Create a root and render the App component under React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// Start the root with the App component wrapped in React.StrictMode
root.render(<React.StrictMode><App /></React.StrictMode>);