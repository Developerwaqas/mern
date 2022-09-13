import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Practice from './Components/Practice';
 import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
          <Login />
         </Route>
         <Route exact path="/register">
          <Register />
         </Route>
         <Route exact path="/practice">
          <Practice />
         </Route>
       </Switch>
     </Router> 
    </div>
  );
}

export default App;
