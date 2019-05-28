import LogoLarge from "../../svgs/LogoLarge"
import { Link } from "gatsby"
import React from "react"

const Logo = () => {
  return (
    <Link to="/">
      <LogoLarge height="3vh" width="13vw" />
    </Link>
  )
}

export default Logo
