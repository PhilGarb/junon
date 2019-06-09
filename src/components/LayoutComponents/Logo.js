import { LogoLarge } from "../../svgs"
import { Link } from "gatsby"
import React from "react"

const Logo = () => {
  return (
    <Link to="/">
      <LogoLarge height="2em" width="6em" />
    </Link>
  )
}

export default Logo
