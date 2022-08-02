import { Outlet } from "react-router-dom";

// CSS
import "./ProfileContainer.css";

export default function ProfileContainer() {
  return (
    <div className="Profile-container">
      <h1>Profiles</h1>
      <div className="Profile-nav">
        <nav></nav>
      </div>
      <Outlet />
    </div>
  );
}
