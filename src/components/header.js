import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css';
const Header = ({ siteTitle }) => (
  <header>

  <div className="nav">
   
   <Link className="nav-item">Home</Link>
  </div>
  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
