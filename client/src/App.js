import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import WidgetOrderStats from "./components/WigetOrders/WidgetOrderStats";


import BankAcc from "./components/Bankaccount/BankAcc";
import Homepage from "./components/HomePage/Homepage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<WidgetOrderStats />} path="/widget" />
          <Route element={<BankAcc />} path="/bankaccount" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
