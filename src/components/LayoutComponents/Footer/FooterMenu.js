import React from "react"

import { Link } from "../layoutIndex"

const FooterMenu = ({ className }) => {
  return (
    <nav className={className}>
      <Link to="/impressum">Impressum</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/datenschutz">Datenschutzerklärung</Link>
    </nav>
  )
}

export default FooterMenu
