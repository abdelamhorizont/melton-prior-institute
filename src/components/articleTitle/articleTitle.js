import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// import {
//     container,
//     div,
// } from './vorlage.module.scss'


const ArticleTitle = (props) => {

    if (props.path) {
        return (
            <div>
            <p>{props.path.categories.nodes[0].name}</p>
            <p>{props.path.author.node.name}</p>
            <p>{props.path.date}</p>
            <h1>{props.path.title}</h1>
        </div>
        )
    } else {
        return (
            null
        )
    }

}

export default ArticleTitle