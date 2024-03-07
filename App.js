import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { KonyvekListPage } from "./KonyvekListPage";
import { KonyvekSinglePage } from "./KonyvekSinglePage";
import { KonyvekCreatePage } from "./KonyvekCreatePage";
import { KonyvekModPage } from "./KonyvekModPage";
import { KonyvekDeletePage } from "./KonyvekDeletePage";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Könyvek</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-konyvek`} className="nav-link">
              <span className="nav-link">Új Könyvek</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<KonyvekListPage />} />
          <Route path="/konyvek/:konyvekId" element={<KonyvekSinglePage />} />
          <Route path="uj-konyvek" element={<KonyvekCreatePage />} />
          <Route path="mod-konyvek/:konyvekId" element={<KonyvekModPage />} />
          <Route path="del-konyvek/:konyvekId" element={<KonyvekDeletePage />} />
      </Routes>
    </Router>
  );
}

export default App;
