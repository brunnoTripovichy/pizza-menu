import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// import pizzaData from './data';

const App = () => {
    return (
        <div className="container">
          <Header />
          <Menu />
          <Footer />
        </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Pizzaria Name</h1>
    </header>
  );
}

const Pizza = () => {
  return (
    <div>
      <img alt="Pizza"></img>
      <h3>Pizza</h3>
      <p>Ingridients</p>
    </div>
  );
}

const Menu = () => {
  return (
    <main className="menu">
      <h2>Menu: </h2>
      <Pizza />
    </main>
  );
}

const Footer = () => {
  const hour = new Date().getHours();

  // Check if the current time is between 12 and 23
  const openTime = 12; 
  const closeTime = 23;
  const isOpen = hour >= openTime && hour <= closeTime;

  if (isOpen) {
    alert("We are open!");
  } else {
    alert("We are cloed!");
  }

  return (
    <footer className="footer">
      Footer
    </footer>
  );
}

// Create a root and render the App component under React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// Start the root with the App component wrapped in React.StrictMode
root.render(<React.StrictMode><App /></React.StrictMode>);