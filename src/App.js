import logo from './logo.svg';
import { useContext } from 'react';
import { AppContext } from './context/app';
import AccommodationGridView from './components/AccommodationGridView';
import SearchBar from "./components/searchBar";
function App() {
  const { projectName } = useContext(AppContext);

  return (
    <>
      <SearchBar topic={{ label: "accomodation", name: "Chỗ ở" }} />
      <AccommodationGridView/>
    </>
  );
}

export default App;
