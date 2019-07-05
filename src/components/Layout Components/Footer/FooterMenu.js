import React from "react"

import { Link } from "../../ComponentsIndex"

const FooterMenu = ({ className }) => {
  return (
    <nav className={className}>
      <Link to="/impressum">Impressum</Link>
      <Link to="/datenschutz">Datenschutzerklärung</Link>
    </nav>
  )
}

export default FooterMenu
