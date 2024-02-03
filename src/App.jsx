import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { CountryDetailsPage } from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/:countryId"
          element={<CountryDetailsPage></CountryDetailsPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
