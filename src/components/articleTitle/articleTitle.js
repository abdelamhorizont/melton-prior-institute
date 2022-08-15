import * as React from 'react'

import {
    articleTitle,
    articleMeta
} from './articleTitle.module.scss'


const ArticleTitle = (props) => {

    if (props.path) {
        return (
            <>
                <div className={articleMeta}>
                    {props.path.autor?.autor &&
                        <h4>{props.path.autor.autor}]</h4>
                    }
                    <h4>[{props.path.date}</h4>
                </div>
                <h1>{props.path.title}</h1>
            </>
        )
    } else {
        return (
            null
        )
    }

}

export default ArticleTitle