import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCustomer from "./Customers/AddCustomer";
import EditCustomer from "./Customers/EditCustomer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
          <Route exact path="/editCustomer/:id" element={<EditCustomer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
