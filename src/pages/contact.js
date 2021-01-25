import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div>
        Contact
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
