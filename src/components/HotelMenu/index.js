import React from 'react';
import './hotel_menu.scss';

function HotelMenu() {
  return (
    <nav className="hotel-menu" role="navigation">
      <ul>
        <li>
          <a href="#map">Map <span className="arrow-right"></span></a>
        </li>
        <li>
          <a href="#photo_gallery">Photo Gallery <span className="arrow-right"></span></a>
        </li>
        <li>
          <a href="#amenities">Amenities <span className="arrow-right"></span></a>
        </li>
        <li>
          <a href="#book">Book <span className="arrow-right"></span></a>
        </li>
      </ul>
    </nav>
  );
}

export default HotelMenu;
