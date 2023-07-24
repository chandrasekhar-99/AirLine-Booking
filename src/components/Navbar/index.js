// Write your code here
import './index.css'

const Navbar = () => (
  <nav className="nav-container fixed-top">
    <h1 className="logo">Booking</h1>
    <p className="nav-text">My Bookings</p>
    <p className="nav-text">Air Lines</p>
    <p className="nav-text">Help Center</p>
    <button type="button" className="login-button">
      Login
    </button>
  </nav>
)
export default Navbar
