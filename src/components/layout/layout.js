import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useState } from 'react';

import Search from '../search/search'
import Article from '../article/article'

import {
    layout
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
              }
            }
            id
            categories {
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
    ) 

    return (
        <div className={layout}>
            <header>
                <nav>
                    <div>
                        <Link to="/"> Melton Prior Institute</Link>
                    </div>
                    <ul>
                        <li><Link to="/meta/about">About</Link></li>
                        <li><Link to="/meta/contact">Contact</Link></li>
                        <div>
                            <button>DE</button>
                            <button>EN</button>
                        </div>
                    </ul>
                    <ul>
                        <li><Link to="/content/features">Features</Link></li>
                        <li><Link to="/content/pictorials">Pictorials</Link></li>
                        <li><Link to="/content/collections">Collections</Link></li>
                        <Search handleSearchData={handleSearchData} />
                    </ul>
                </nav>
            </header>
        {searchData}
            <main>
                { searchData!=="" 
                ?
                <div>
                    <ul>
                        { 
                            articles.map(edge => (

                                <Link to={`/content${edge.node.uri}`}>
                                    <li key={edge.node.id}>
                                        <Article path={edge.node} />
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
                    <li><Link to="/meta/imprint">Imprint</Link></li>
                    <li><Link to="/meta/agb">AGB</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout
