import Navbar from "./componets/Navbar/Navbar";
import Simulation from "./content/Simulacion";
import Information from "./content/Informacion";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mt-5">
        <Switch>
          <Route path="/simulacion">
            <Simulation />
          </Route>
          <Route path="/">
            <Information />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
