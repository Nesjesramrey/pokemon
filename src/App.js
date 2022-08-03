import { Routes, Route } from "react-router-dom";
import "./App.css";

// Containers
import AppContainer from "./containers/AppContainer";
import ProfileContainer from "./containers/ProfileContainer";

// Components
import Home from "./pages/Home";
import ProfileDetail from "./pages/Profiles/Detail";
import ProfileList from "./pages/Profiles/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="profiles" element={<ProfileContainer />}>
            <Route index element={<ProfileList />} />
            <Route path=":id" element={<ProfileDetail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
