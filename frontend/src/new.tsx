import React from "react"
import { Link, Route, Routes } from "react-router-dom"

function TopBanner() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="col-9">
          <div className="navbar-collapse">
            <div className="col-3">
              <Link to="/">Home</Link>
            </div>
            <div className="col-3">
              <Link to="/Podcast">Podcast</Link>
            </div>
            <div className="col-3">
              <Link to="/Movies">Movie List</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopBanner
