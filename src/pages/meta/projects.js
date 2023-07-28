import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout/layout'

import {
  contentPage,
  topBrackets,
  articleWrapper,
  pageContent,
  sectionTitle,
  metaNav
} from '../../styles/content.module.scss'


export default function Projects() {
  const data = useStaticQuery(graphql`
      query {
        wpPage(title: {eq: "Projects"}) {
            content
            id
          }
          allWpPage(
            filter: {parentId: {eq: "cG9zdDoxMzY4NA=="}}
            sort: { order: ASC, fields: menuOrder }
          ) {
            nodes {
              menuOrder
              id
              title
              content
            }
          }
        }   
    `)

  const parentPage = data.wpPage
  const childrenPages = data.allWpPage.nodes

  // console.log('wpPag', parentPage, 'childpag', childrenPages)

  return (
    <Layout>
      <div className={contentPage}>
        <div className={articleWrapper}>
          <div className={sectionTitle}><h4>Projects</h4></div>
          <div className={topBrackets}>
            <span>]</span>
            <span>[</span>
          </div>



          <div 
          className={pageContent}/>
          <div className={pageContent}>
          <div dangerouslySetInnerHTML={{ __html: parentPage.content }} />
            <ul className={metaNav}>
            {childrenPages.map((page, index) => (
              <li><a key={index} href={`#[${index + 1}]`}>{page.title}</a></li>
            ))}
            </ul>
          </div>


        </div>


        {childrenPages.map((page, index) => (
          <div key={page.title} id={`[${index + 1}]`} className={articleWrapper}>
            <div className={sectionTitle}><h4>{page.title}</h4></div>
            <div className={topBrackets}>
              <span>]</span>
              <span>[</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: page.content }} className={pageContent} />
          </div>
        ))}
      </div>
    </Layout>
  )
}