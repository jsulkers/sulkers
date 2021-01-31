import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {Container, Row, Col} from "react-bootstrap";
import SulkersImg from "/src/images/sulkers.jpg";

export default function Index() {
  return (
    <Layout>
    <Container fluid>
      <Row>
        <Col>
          <img class="source-image" src={SulkersImg} alt="Pic of Josh" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </Layout>
  )
}
