import logo from './logo.svg';
import { useContext } from 'react';
import { AppContext } from './context/app';
import {BrowserRouter as Router, Routes, Route, Form} from 'react-router-dom';
import FormCreate from './components/form_create';

function App() {
  const { projectName } = useContext(AppContext);

  return (
    <div className="app">
      <FormCreate />
    </div>
  );
}

export default App;
