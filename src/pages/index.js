import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <h1>Some styling</h1>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Link to="/contact/">Contact</Link>
        <h1>Test</h1>
      </div>
    </Layout>
  )
}
