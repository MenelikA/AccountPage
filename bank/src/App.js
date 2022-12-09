import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  // stores information of the current user
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
