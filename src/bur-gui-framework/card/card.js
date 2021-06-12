import React from 'react'
import './card.css'

const Card = ({ title, children, style }) => {
    return (
        <div style={style} className={'card'}>
            <h2 className={'card_header'}>{title}</h2>
            <div className={'card_main'}>{children}</div>
        </div>
    )
}

export default Card
