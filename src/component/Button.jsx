import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();
  return (
    <button className="btn" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}

export default Button;
