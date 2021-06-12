import React from 'react'
import './tag.css'

const Tag = ({ type, title, style }) => {
    return (
        <div style={style} className={`tag ${type}`}>
            {title}
        </div>
    )
}

export default Tag
