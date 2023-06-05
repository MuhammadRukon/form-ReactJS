import Form from "./components/form";
import Signin from "./components/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
