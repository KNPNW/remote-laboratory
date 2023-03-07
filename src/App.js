import logo from './logo.svg';
import './App.css';
import React from "react";

import {Route, Routes} from "react-router-dom";
import MainNotAuth from "./Pages/MainNotAuth";
import MainAuth from "./Pages/MainAuth";
import Support from "./Pages/Support";
import Manual from "./Pages/Manual";
import Board from "./Pages/Board";


function App() {
  return (
      <Routes>
          <Route path="/home" element={<MainNotAuth/>}/>
          <Route path="/profile" element={<MainAuth />}/>
          <Route path="/boards" element={<MainAuth />}/>
          <Route path="/boards/board/:numBoard" element={<Board/>} />
          <Route path="/manual" element={<Manual />}/>
          <Route path="/support" element={<Support />}/>
      </Routes>

  );
}

export default App;
