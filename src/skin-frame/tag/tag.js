import React from 'react'
import './tag.css'

const Tag = ({ type, title }) => {
    return <div className={`tag ${type}`}>{title}</div>
}

export default Tag
