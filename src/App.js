import "./App.css";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import "./components/Header";
import Header from "./components/Header";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
   <Header />
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;


