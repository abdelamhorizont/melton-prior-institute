import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// import {
//     container,
//     navLinks,
//     navLinkItem,
//     navLinkText,
// } from './layout.module.scss'


const Layout = ({ children }) => {
    // const data = useStaticQuery(graphql`
    // query {
    //     site {
    //       siteMetadata {
    //         title
    //       }
    //     }
    //   }
    // `)

    return (
        <div>
            <header>
                <nav>
                    <div>
                        <Link to="/"> offshoot*berlin</Link>

                    </div>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/imprint">Imprint</Link></li>
                        <li><Link to="/agb">AGB</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/work">Work</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Layout