import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/articles" component={Home}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
