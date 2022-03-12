import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage, VideoPage } from "./pages";
import './App.css';

export default function App() {
  return (
    <div className="Root">
       <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </Router>
    </div>
  );
}
