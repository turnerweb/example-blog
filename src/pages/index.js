import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Posts from '../components/PostsPreview'


export default function Home() {

  return (
      <Layout>
        <Hero />
        <Posts />
      </Layout>
    )
}