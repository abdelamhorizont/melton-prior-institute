import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useState } from 'react';

import Search from '../search/search'
import Article from '../article/article'

import {
  layout,
  categories
} from './layout.module.scss'


const Layout = ({ children }) => {
  const query = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                title
                image {
                  url
                }
              }
            }
            id
            categories {
              nodes {
                name 
              }
            }
            tags {
              nodes {
                name
              }
            }
            title
            date(formatString: "MMMM D, YYYY")
            author {
              node {
                name
              }
            }
            excerpt
            uri
            language {
              code
            }
            translations {
              uri
              language {
                code
              }
            }
          }
        }
      }
    }
    `)

  const [searchData, setSearchData] = useState('');

  const handleSearchData = (searchData) => {
    setSearchData(searchData);
  }

  const articles = query.allWpPost.edges.filter(edge =>
    edge.node.title.toLowerCase().includes(searchData.toLowerCase())
  ).filter( edge => edge.node.language.code == "EN" )

  return (
    <div className={layout}>
      <header>
        <nav>
          <div>
            <Link to="/">Melton Prior Institute</Link>
          </div>
          <div>

          </div>
          <ul>
            <li key="about"><Link to="/meta/about">About</Link></li>
            <li key="projects"><Link to="/meta/projects">Projects</Link></li>
            <li key="links"><Link to="/meta/links">Links</Link></li>
          </ul>
          <div>
          </div>
          <ul className={categories}>
            <li key="features"><Link to="/content/features">Features</Link></li>
            <li key="pictorials"><Link to="/content/pictorials">Pictorials</Link></li>
            <li key="collections"><Link to="/content/collections">Collections</Link></li>
          </ul>
          <Search handleSearchData={handleSearchData} />
        </nav>
      </header>

      <div>
        {searchData}
      </div>
      
      <main>
        {searchData !== ""
          ?
          <div>
            <ul>
              {
                articles.map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} excerpt={true} />
                    </li>
                  </Link>

                ))
              }
            </ul>
          </div>
          :
          children
        }
      </main>

      <footer>
        <ul>
          <li key="contact"><Link to="/meta/contact">Contact</Link></li>
          <li key="imprint"><Link to="/meta/imprint">Imprint</Link></li>
          <li key="privacypolicy"><Link to="/meta/privacypolicy">Privacy Policy</Link></li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
