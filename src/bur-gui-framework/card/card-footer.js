import React from 'react'
import './card.css'

const CardFooter = ({ children, style }) => {
    return (
        <div style={style} className={'card_footer'}>
            {children}
        </div>
    )
}

export default CardFooter
