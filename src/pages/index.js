import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Some styling</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Link to="/contact/">Contact</Link>
      <h1>Test</h1>
    </div>
  )
}
