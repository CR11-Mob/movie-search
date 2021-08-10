import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
