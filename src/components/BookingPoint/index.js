// Write your code here
import {FaMapMarkerAlt, FaUserFriends} from 'react-icons/fa'

import './index.css'

const BookingPoint = () => (
  <>
    <div className="booking-container">
      <div className="location-container">
        <div className="input-container">
          <FaMapMarkerAlt />
          <input
            className="input-el"
            type="text"
            placeholder="FROM"
            id="Departure"
          />
        </div>
        <div className="input-container">
          <FaMapMarkerAlt />
          <input
            className="input-el"
            type="text"
            placeholder="TO"
            id="Arrival"
          />
        </div>
      </div>
      <div className="location-container">
        <div className="label-input">
          <label htmlFor="departure-time">Departure</label>
          <input
            className="date-input"
            placeholder="Date"
            type="date"
            id="departure-time"
          />
        </div>
        <div className="label-input">
          <label htmlFor="Return-time">Return</label>
          <input
            className="date-input"
            placeholder="Date"
            type="date"
            id="Return-time"
          />
        </div>
      </div>
      <div className="location-container">
        <div className="label-input">
          <label htmlFor="passenger">Passengers</label>
          <div className="people-container">
            <FaUserFriends />
            <select id="passenger" className="people-form">
              <option value="Adults">Adults</option>
              <option value="children">children</option>
              <option value="Infants">Infants</option>
            </select>
          </div>
        </div>
        <div className="label-input">
          <label htmlFor="class">Class</label>
          <div>
            <select id="class" className="class-form">
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>
        </div>
      </div>
      <button type="button" className="search-button">
        Search
      </button>
    </div>
  </>
)
export default BookingPoint
