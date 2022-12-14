import { Outlet, Link } from "react-router-dom";
import "./AppContainer.css";

export default function AppContainer() {
  return (
    <div className="App-container">
      <div className="App-container-2">
        <div className="App-container-nav">
          <nav>
            <Link to="">Home</Link>
            <Link to="profiles">Profiles</Link>
          </nav>
        </div>
        <div className="App-container-content">
          <div className="Content-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
