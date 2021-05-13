import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/PostsPreview'
import Infos from '../components/Infos'
import Points from '../components/Points-of-interesst'


export default function Home() {

  return (
      <Layout>
        <Hero />
        <Posts />
        <Infos />
        <Points />
      </Layout>
    )
}