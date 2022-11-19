import logo from "./logo.svg";
import { useContext } from "react";
import { AppContext } from "./context/app";
import SearchBar from "./components/searchBar";
function App() {
  const { projectName } = useContext(AppContext);

  return (
    <div className="w-screen h-screen">
      <header className="flex items-center flex-col">
        <img src={logo} className="w-1/2" alt="logo" />
        <p className="text-white text-4xl font-bold">This is {projectName}</p>
      </header>
      <SearchBar topic={{ label: "accomodation", name: "Chỗ ở" }} />
    </div>
  );
}

export default App;
