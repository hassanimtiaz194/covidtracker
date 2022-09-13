//import logo from './logo.svg';
//import './App.css';
import WorldComponent from "./components/worldcomponent";
//import SearchAppBar from "./components/NabBar";
import SearchAppBar from'./components/SearchAppBar';
import DataBody from "./components/DataBody";

function App() {
  return (
    <div>
      <SearchAppBar/>
      <DataBody />
    </div>
  );
}

export default App;
