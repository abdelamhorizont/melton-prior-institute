import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// import {
//     container,
//     div,
// } from './vorlage.module.scss'


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
        <div>
            <h1>{title} ]</h1>
            {children}
        </div>
    )
}

export default Section