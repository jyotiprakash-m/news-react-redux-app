import './App.css';
import SideBar from "./components/SideBar"
import NewsListing from "./components/NewsListing"

function App() {
  return (
    <div className="app">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <NewsListing />
      </div>
    </div>
  );
}

export default App;
