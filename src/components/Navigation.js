import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid justify-content-start">
        <div className="navbar-header">
          <Link className="navbar-brand" to="#">
            girlie fit
          </Link>
        </div>
        <ul className="nav flex-row">
          <li className={`px-1 ${pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`px-1 ${pathname === '/' ? 'active' : ''}`}>
            <Link to="/workouts">Workouts</Link>
          </li>
        </ul>
        <ul
          style={{ display: 'inline' }}
          className="nav navbar-nav navbar-right"
        ></ul>
      </div>
    </nav>
  );
};

export default Navigation;
