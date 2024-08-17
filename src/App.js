import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import './App.css';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
     <section className="container" aria-labelledbyedby="pricing-section">

     <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

    <header><h2>API Pricing</h2>
    <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
    </header>

    <table aria-labelledbyby="pricing-table">
      <thead>
        <tr>
          <th>API</th>
          <th>Model</th>
          <th>Price per 1K tokens</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OpenAI</td>
          <td>GPT-3.5</td>
          <td>$0.002</td>
        </tr>
        <tr>
          <td>OpenAI</td>
          <td>GPT-3.4</td>
          <td>$0.003</td>
        </tr>
        <tr>
          <td>Together AI</td>
          <td>Llama-2-70b</td>
          <td>$0.0008</td>
        </tr>
        <tr>
          <td>Together AI</td>
          <td>Llama-2-13b</td>
          <td>$0.0006</td>
        </tr>
      </tbody>
    </table>

    <h3>Token Estimation</h3>
    <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
    <h3>Billing</h3>
    <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
     
     </section>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
