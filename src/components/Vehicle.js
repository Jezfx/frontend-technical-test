import React from 'react';
import PropTypes from 'prop-types';

const Vehicle = ({ vehicle = {} }) => {
  return (
    <div>
      {vehicle &&
        <div className="vehicle">
          <div className="vehicle__image" style={{ backgroundImage: `url(${vehicle.media[0].url})` }}></div>
          <div className="vehicle__info">
            <p className="vehicle__name">{vehicle.media[0].name}</p>
            <p className="vehicle__price">{vehicle.price}</p>
            <p className="vehicle__description">{vehicle.description}</p>
          </div>
        </div>
      }
    </div>
  )
}

Vehicle.proptypes = {
  vehicle: PropTypes.object,
}

export default Vehicle;
