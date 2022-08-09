import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
    section,
    sectionTitle,
    recommendedSection,
    categoriesSection
} from './section.module.scss'


import '../../styles/swiper.scss';

const Section = ({ children, title, className, onClick }) => {
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
        <div className={className} onClick={onClick}>
                <h2>{title}</h2>
               <span>]</span>
                <span>[</span>
            {children}
        </div>
    )
}

export default Section