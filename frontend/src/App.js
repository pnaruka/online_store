import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./CartPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
