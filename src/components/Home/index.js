// Write your code here
import {Component} from 'react'

import './index.css'
import Navbar from '../Navbar'
import BookingPoint from '../BookingPoint'

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home-container">
          <h1 className="text-heading">Book a Flight</h1>
          <p className="description">
            Search for flights and book online. See our routes and schedules,
            and discover more about the experience you can look forward to on
            board.
          </p>

          <BookingPoint />
        </div>
      </>
    )
  }
}

export default Home
