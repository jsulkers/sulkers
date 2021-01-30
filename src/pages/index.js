import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Josh Sulkers</h1>
        <Link to="/contact/">Contact</Link>
        <h1>Test</h1>
      </div>
    </Layout>
  )
}
