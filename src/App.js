import './App.css';
import Home from './Components/Pages/Home';
import { useState } from 'react'
import UrlBox from './Components/UI/UrlBox';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <Home setInputValue={setInputValue} />
      <UrlBox inputValue={inputValue} />
    </div>
  );
}

export default App;
