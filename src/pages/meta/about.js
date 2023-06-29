

import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import {
  contentPage,
  topBrackets,
  articleWrapper,
  pageContent,
  sectionTitle
} from '../../styles/content.module.scss'

export default function About() {
  const data = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "About"}) {
            id
            content
          }
          allWpPage(filter: {title: {eq: "Linton Archive"}}) {
            nodes {
              title
              content
            }

            
          }
        }   
    `)


              // allWpPage(filter: {parent: {id: {eq: "cG9zdDo5NjE0"}}}) {
          //   nodes {
          //     title
          //     content

const aboutPage = data.wpPage
// const childrenPages = data.allWpPage.nodes

// console.log('aboutPage:', aboutPage, 'childrenPages:', childrenPages)
  return (
    <Layout>
      <div className={contentPage}>
        <div class={articleWrapper}>
          <div class={sectionTitle}><h4>About</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} className={pageContent} />
        </div>

        <div class={articleWrapper} id="linton">
          <div class={sectionTitle}><h4>Linton Archive</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.allWpPage.nodes[0].content }} className={pageContent} />
        </div>
        {/* {childrenPages.map(page => (
          <div key={page.title} class={articleWrapper}>
            <div class={sectionTitle}><h4>{childrenPages.title} asdasd</h4></div>
            <div className={topBrackets}>
              <span>]</span>
              <span>[</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: childrenPages.content }} className={pageContent} />
          </div>
        ))} */}


      </div>
    </Layout>
  )
}