import * as React from 'react'

import {
    articleTitle,
} from './articleTitle.module.scss'


const ArticleTitle = (props) => {

    if (props.path) {
        return (
            <div className={articleTitle}>
                <div></div>
                <div>
                    {/* {
                        props.path.categories.nodes[0] &&
                        <p>{props.path.categories.nodes[0].name}</p>
                    } */}
                    {props.path.autor && props.path.autor.autor != null ?
                        <p>{props.path.autor.autor}]</p> :
                        <p>{props.path.author.node.name}]</p>
                    }
                    <p>[{props.path.date}</p>
                    <h1>{props.path.title}</h1>
                </div>
            </div>
        )
    } else {
        return (
            null
        )
    }

}

export default ArticleTitle