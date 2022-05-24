import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
    section,
    section_title
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
            <div className={section_title}>
                <h2>{title}</h2><span>]</span>
            </div>
            {children}
        </div>
    )
}

export default Section