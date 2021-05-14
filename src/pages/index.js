import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/sections/Hero'
import PostsPreview from '../components/sections/PostsPreview'
import Infos from '../components/sections/Infos'
import PoiPreview from '../components/sections/PoiPreview'


export default function Home() {

  return (
      <Layout>
        <Hero />
        <PostsPreview />
        <Infos />
        <PoiPreview />
      </Layout>
    )
}