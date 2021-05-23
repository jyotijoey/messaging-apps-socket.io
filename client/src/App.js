import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, route} from "react-router-dom";
import Join from "./components/Join"
import Chat from "./components/Chat";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Join}>
        
      </Route>
      <Route path="/chat" component={Chat}>
        
      </Route>
    </Router>

    // <div className="App">
    //   <h1>hello world</h1>
    // </div>
  );
}

export default App;
