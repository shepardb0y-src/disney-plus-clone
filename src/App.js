import "./App.css";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import "./components/Header";
import Header from "./components/Header";
import Detail from "./components/Detail"
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
    
        <Home />
      
     
        <Detail />
      
    </div>
  );
};

export default App;
