import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useState, useEffect } from 'react';

import Search from '../search/search'
import Article from '../article/article'

import {
  layout,
  brand,
  searchBox,
  categories,
  secondaryNav,
  primaryNav,
  searchResultsWrapper,
  burgerButton,
  menuTransition,
  home,
  menuTopRowBg,
  menuBottomRowBg,
  searchWords,
  active,
  firstNav,
  secondNav
} from './layout.module.scss'

import {
  articleFeature,
  articlePictorial,
  thumbnail
} from '../../components/article/article.module.scss'



const Layout = ({ children, path }) => {
  const query = useStaticQuery(graphql`
    query {
      allWpPost(sort: {order: DESC, fields: date}) {
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
            content
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

  const articles = path ? path.filter(edge =>
    edge.node.title.toLowerCase().includes(searchData.toLowerCase()) ||
    edge.node.excerpt.toLowerCase().includes(searchData.toLowerCase()) ||
    edge.node.tags.nodes.some(node => node?.name.includes(searchData.toLowerCase())) ||
    // __html: edge.node.content.toLowerCase().includes(searchData.toLowerCase()) || 
    edge.node.author.node?.name.toLowerCase().includes(searchData.toLowerCase())
  ).filter(edge => edge.node.language.code == "EN")
  :
  query.allWpPost.edges.filter(edge =>
      edge.node.title.toLowerCase().includes(searchData.toLowerCase()) ||
      edge.node.excerpt.toLowerCase().includes(searchData.toLowerCase()) ||
      edge.node.tags.nodes.some(node => node?.name.includes(searchData.toLowerCase())) ||
      // __html: edge.node.content.toLowerCase().includes(searchData.toLowerCase()) || 
      edge.node.author.node?.name.toLowerCase().includes(searchData.toLowerCase())
    ).filter(edge => edge.node.language.code == "EN")
 
  // const articles = query.allWpPost.edges.filter(edge =>
  //   edge.node.title.toLowerCase().includes(searchData.toLowerCase()) ||
  //   edge.node.excerpt.toLowerCase().includes(searchData.toLowerCase()) ||
  //   edge.node.tags.nodes.some(node => node.name.includes(searchData.toLowerCase())) ||
  //   // __html: edge.node.content.toLowerCase().includes(searchData.toLowerCase()) || 
  //   edge.node.author.node.name.toLowerCase().includes(searchData.toLowerCase())
  // ).filter(edge => edge.node.language.code == "EN")

  const [scrollPos, setScrollPos] = useState(0)
  const [showNav, setShowNav] = useState(true)
  const [burgerBottonActive, setBurgerBottonActive] = useState(false)
  const [mobile, setMobile] = useState(false)

  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`
    setMobile(isBrowser() && window.screen.width < 620 ? true : false)
    mobile && setShowNav(false)
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
    }
  }, [scrollPos])

  const handleScroll = () => {
    if (typeof window !== 'undefined') {

      setScrollPos(window.scrollY)
      !mobile && setShowNav(window.scrollY < scrollPos)
    }
  }

  return (
    <div className={layout}>
      <header className={burgerBottonActive ? `${active}` : ''}>
        <nav className={burgerBottonActive ? `${firstNav} ${active}` : `${firstNav}`}>
          <div className={brand}>
            <Link to="/">Melton Prior Institute</Link>
          </div>
          <div className={burgerBottonActive ? `${burgerButton} ${active}` : burgerButton} id="burgerButton" onClick={() => {
            setBurgerBottonActive(!burgerBottonActive)
            setShowNav(!showNav)
          }
            }></div>
          <ul className={secondaryNav}>
            <li key="about"><Link to="/meta/about">About</Link></li>
            <li key="projects"><Link to="/meta/projects">Projects</Link></li>
            <li key="links"><Link to="/meta/links">Links</Link></li>
          </ul>
          <div className={menuTopRowBg}></div>
        </nav>

        <nav className={burgerBottonActive ? `${secondNav} ${active}` : `${secondNav}`} style={showNav ? { transform: "translateY(0rem)" } : { transform: "translateY(0)" }}>
          <div className={menuTransition}>
            <ul className={categories}>
              <li key="features"><Link to="/content/features">Features</Link></li>
              <li key="pictorials"><Link to="/content/pictorials">Pictorials</Link></li>
              <li key="collections"><Link to="/content/collections">Collections</Link></li>
            </ul>
            <Search handleSearchData={handleSearchData} />

            <div className={menuBottomRowBg} style={!burgerBottonActive && showNav ? { transform:  "translateY(0rem)" } : { transform: "translateY(0)" }}></div>
          </div>

        </nav>
      </header>


      <main>
        {searchData !== ""
          ?
          <div className={searchResultsWrapper}>
            <ul>
              <div className={searchWords}><h1>Search results for: {searchData}</h1></div>
              {
                articles.map(edge => (

                  <Link to={`/content${edge.node.uri}`}>
                    <li key={edge.node.id}>
                      <Article path={edge.node} excerpt={true} className={articleFeature} />
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
