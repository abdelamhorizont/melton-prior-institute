import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
    layout,
    categories
} from './layout.module.scss'


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
        <div className={layout}>
            <header>
                <nav>
                    <div>
                        <Link to="/"> Melton Prior Institute</Link>
                    </div>
                    <div>

                    </div>
                    <ul>
                        <li><Link to="/meta/about">About</Link></li>
                        <li><Link to="/meta/contact">Contact</Link></li>
                        <div>
                            <button>DE</button>
                            <button>EN</button>
                        </div>
                    </ul>
                    <div>
                    </div>
                    <ul className={categories}>
                        <li><Link to="/content/features">Features</Link></li>
                        <li><Link to="/content/pictorials">Pictorials</Link></li>
                        <li><Link to="/content/collections">Collections</Link></li>
                    </ul>
                    <div>
                        <Link to="/">search</Link>
                        <span><input type="text" /></span>
                        
                    </div>
                </nav>
            </header>

            <main>
                {children}
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