import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li key="to-list"><Link to="/list" >List</Link></li>
        <li key="to-edit"><Link to="/edit" >Edit</Link></li>
      </ul>
    </div>
  );
};
