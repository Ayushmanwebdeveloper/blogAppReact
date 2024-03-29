import { Route, Routes } from "react-router-dom";
import PostContainer from "./components/postcontainer";
import Header from "./components/header";
import './App.css';
import Navbar from './components/navbar.js';
import NewBlog from "./components/newBlog";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PostContainer />
      <Routes>
        <Route path="new" element={<NewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
