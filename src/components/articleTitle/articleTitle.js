import * as React from 'react'

import {
    articleTitle,
} from './articleTitle.module.scss'


const ArticleTitle = (props) => {

    if (props.path) {
        return (
                <>

                    {props.path.autor && props.path.autor.autor != null ?
                        <p>{props.path.autor.autor}]</p> :
                        <p>{props.path.author.node.name}]</p>
                    }
                    <p>[{props.path.date}</p>
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