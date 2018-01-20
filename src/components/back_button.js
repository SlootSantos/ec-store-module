import React from 'react';
import { Link } from 'react-router-dom';

import Back from '../assets/back.svg';
import '../styles/button/backbutton.css';

export default function BackButton() {
  return (
    <div className="back_button">
      <Link to="/">
        <img src={Back} alt="" height="30" />
      </Link>
    </div>
  );
}
