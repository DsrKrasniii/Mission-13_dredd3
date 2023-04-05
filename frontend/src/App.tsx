import React from "react"
import logo from "./logo.svg"
import "./App.css"
import TopBanner from "./new"
import MovieList from "./movie/MovieList"
import { Link, Route, Routes } from "react-router-dom"
import MainPage from "./home"
import Podcasted from "./podcast"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <TopBanner />
      <Routes>
        <Route path="/Movies" element={<MovieList />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/Podcast" element={<Podcasted />} />
      </Routes>
    </>
  )
}

export default App
