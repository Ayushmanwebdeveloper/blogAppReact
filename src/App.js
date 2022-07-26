import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Header from "./components/header";
import './App.css';
import Navbar from './components/navbar.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes></Routes>
    </div>
  );
}

export default App;
