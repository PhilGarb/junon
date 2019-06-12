import LogoLarge from "../../svgs/LogoLarge"
import { Link } from "gatsby"
import React from "react"

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <LogoLarge className={className} />
    </Link>
  )
}

export default Logo
