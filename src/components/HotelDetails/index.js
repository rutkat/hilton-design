import React from 'react';
import './hotel_details.scss';
import HOTELS from '../../data/hotel-details.js';
import HotelMenu from '../HotelMenu';

function HotelDetails() {
  const telephone = 'tel:' + HOTELS[0].phone;
  return (
    <section className="hotel-details">
      <img className="hotel-photo" src={HOTELS[0].imgUrl} alt={HOTELS[0].imgAlt} />
      <div className="hotel-text">
        <h3>{HOTELS[0].name}</h3>
        <address>
          {HOTELS[0].streetAddress} <br/>
          {HOTELS[0].cityStateZip}
        </address>
        <a href={telephone}>
          <span>{HOTELS[0].phone}</span>
        </a>
      </div>
      <HotelMenu></HotelMenu>
    </section>
  );
}

export default HotelDetails;
