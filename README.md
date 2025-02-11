# **🍕 React Pizza Project**  

A **simple React project** demonstrating the **fundamentals of React**, including **components, props, state, conditional rendering, and lists**. Styled with **pure CSS** using an **Italian-inspired theme** 🇮🇹.  

---

## **📌 Features**  
✅ **React Functional Components** – Organized and reusable.  
✅ **Props & State Management** – Passing and handling data efficiently.  
✅ **Lists & Conditional Rendering** – Displaying and filtering dynamic content.  
✅ **CSS Styling** – Custom styles using variables and responsive design.  
✅ **No External Libraries** – Built only with **React & CSS** for learning purposes.  

---

## **🚀 Getting Started**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/YOUR_USERNAME/react-pizza-project.git
cd react-pizza-project
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Run the Development Server**  
```bash
npm run dev
```
Your app will be available at **http://localhost:5173/** 🚀  

---

## **📂 Project Structure**  
```
/src
  ├── /assets         # Images & static assets
  ├── /components     # Reusable UI components (Button, Order)
  ├── /features       # Feature-based components (Menu, PizzaItem)
  ├── /layouts        # Structural components (Header, Footer)
  ├── /data           # Mock data (pizzaData)
  ├── App.jsx         # Main app component
  ├── index.jsx       # Entry point
  ├── index.css       # Global styles
```

---

## **🖥️ Core React Concepts Used**  

### **1️⃣ Components**  
Each section of the app is split into **small, reusable functional components**.  

📌 **Example: `Header.jsx`**  
```jsx
const Header = () => <header className="header"><h1>Pizza Menu</h1></header>;
export default Header;
```

### **2️⃣ Props & Reusability**  
Passing **props** to make components reusable.  

📌 **Example: `PizzaItem.jsx`**  
```jsx
const PizzaItem = ({ pizza }) => (
  <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
    <img src={pizza.photoName} alt={pizza.name} />
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.soldOut ? "Sold Out" : `$${pizza.price}`}</span>
    </div>
  </li>
);
export default PizzaItem;
```

### **3️⃣ Lists & Conditional Rendering**  
Dynamically rendering a **list of pizzas** using `.map()`, and showing a message when there’s no data.  

📌 **Example: `Menu.jsx`**  
```jsx
{pizzaData.length > 0 ? (
  <ul className="pizzas">
    {pizzaData.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)}
  </ul>
) : (
  <p>No pizzas available.</p>
)}
```

### **4️⃣ Handling State**  
Using **JavaScript Date()** to determine if the restaurant is **open or closed**.  

📌 **Example: `Footer.jsx`**
```jsx
const hour = new Date().getHours();
const isOpen = hour >= 10 && hour <= 23;

return (
  <footer className="footer">
    {isOpen ? <Order closeTime="23" /> : <p>We are closed. Come back later!</p>}
  </footer>
);
```

---

## **🎨 Italian-Inspired CSS Theme** 🇮🇹  

The UI is styled with **CSS variables** and an **Italian color scheme**:  
- **🍅 Red (`#C0392B`)** → Tomato Sauce  
- **🌿 Green (`#27AE60`)** → Basil  
- **🧀 Yellow (`#F1C40F`)** → Cheese  
- **🍞 Brown (`#8D6E63`)** → Wood-Fired Oven  

📌 **Example: CSS Variables (`index.css`)**  
```css
:root {
  --primary-red: #C0392B;
  --primary-green: #27AE60;
  --primary-yellow: #F1C40F;
  --primary-brown: #8D6E63;
}
```

---

## **🌍 Deployment**  
This project can be deployed easily using **Vercel, Netlify, or GitHub Pages**.  

### **Deploy on Vercel**  
```bash
npm run build
vercel deploy
```

### **Deploy on Netlify**  
```bash
npm run build
netlify deploy
```

---

## **💡 Why This Project?**  
This project is **not a full app**—it’s designed to **teach beginners** how to use React **without complexity**.  

By working through this, you will:  
✔ Understand how **React components work**.  
✔ Learn how to **pass and use props**.  
✔ Practice **rendering lists dynamically**.  
✔ Gain experience with **CSS styling in React**.  

---

## **🙌 Contributing**  
Want to improve the project? Feel free to contribute!  

1. **Fork** the repo  
2. **Create a branch:** `git checkout -b my-feature`  
3. **Commit changes:** `git commit -m "Added a new feature"`  
4. **Push the branch:** `git push origin my-feature`  
5. **Open a Pull Request**  

---

## **📜 License**  
This project is **MIT licensed**. Feel free to use and modify it.  

---

## **🍕 Ready to Build?**  
This project is a **fun way to practice React fundamentals**!  

If you find it useful, ⭐ **star the repo** and share it with others! 🚀🔥  

---

**Made with ❤️ and 🍕 by [Your Name]** 🍕🚀
