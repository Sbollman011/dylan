import './App.css';
import JumboTron from './components/JumboTron';
import NavBar from './components/NavBar';
import MapContainer from './components/Map'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className ="router">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Map">
            <Map />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <JumboTron/>;
}

function Map() {
  return(
  <div>
  <NavBar></NavBar>;
   <MapContainer/>;
   </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}
