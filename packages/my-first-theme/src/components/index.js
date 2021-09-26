import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"



const Root = ({ state }) => {
  return (
    <>
      <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br/>
        <Link link="/ppage/2">More Posts</Link>
        <br/>
        <Link link="about-us">about</Link>
      </nav>
    </>
  )
}

export default connect(Root)