import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
    articleBody
} from './articleBody.module.scss'


const ArticleBody = () => {

    return (
        <div className={articleBody}>
            <p>Lorem ipsum</p>
        </div>
    )
}

export default ArticleBody