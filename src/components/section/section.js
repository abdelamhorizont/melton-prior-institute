import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
    section
} from './section.module.scss'


const Section = ({ children, title }) => {
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
        <div className={section}>
            <div>
                <h1>{title}</h1><span>]</span>
            </div>
            {children}
        </div>
    )
}

export default Section