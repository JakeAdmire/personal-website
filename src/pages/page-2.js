import React from "react"
import { Link } from "gatsby"

import Wrapper from "../components/Wrapper"


const SecondPage = () => (
  <Wrapper>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Wrapper>
)

export default SecondPage
