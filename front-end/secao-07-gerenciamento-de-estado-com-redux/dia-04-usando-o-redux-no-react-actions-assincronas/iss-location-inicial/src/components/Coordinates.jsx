import React from 'react';
import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';

export default class Coordinates extends React.Component {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <div className="lat-long-section-wrapper">
        <section className="lat-long-section">
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ latitudeImg }
              width={ 24 }
              height={ 24 }
              alt="latitude"
            />
            <span>
              Latitude:
              {' '}
              {latitude}
            </span>
          </div>
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ longitudeImg }
              width={ 24 }
              height={ 24 }
              alt="longitude"
            />
            <span>
              Longitude:
              {' '}
              {longitude}
            </span>
          </div>
        </section>
      </div>
    );
  }
}
