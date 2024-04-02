import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top" style={{ backgroundColor: 'lightpink', height: '30px'}}>
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          </Link>
          <span className="mb-3 mb-md-0" style={{ color: 'black', whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            © 2023 Natural Ayurvedic Products & Recipes by Natural Ayurvedic Products(PVt) Ltd, Galle, - 2023
          </span>
        </div>
      </footer>
    </div>
  );
}
