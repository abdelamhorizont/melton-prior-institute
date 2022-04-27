import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../../components/layout/layout'
import Section from '../../components/section/section'
import ArticleTitle from '../../components/articleTitle/articleTitle'
import ArticleBody from '../../components/articleBody/articleBody'

import {
   container,
} from './article.module.scss'


const Article = (props) => {

   return (
      <div>
         {
            props.path.featuredImage && props.path.featuredImage.node.localFile.childImageSharp &&
            <GatsbyImage image={props.path.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt="test" />
         }
         <ArticleTitle path={props.path} />
         <p dangerouslySetInnerHTML={{ __html: props.path.excerpt }} />
      </div>
   )
}

export default Article