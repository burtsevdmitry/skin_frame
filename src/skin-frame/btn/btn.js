import React from 'react'
import './btn.css'

const Btn = ({
    title,
    img,
    type,
    block,
    outline,
    callback,
    onlyIcon,
    children,
}) => {
    return (
        <div
            onClick={callback}
            className={`btn ${type} ${block ? 'btn__block' : ''} ${
                outline ? 'btn__outline' : ''
            } ${onlyIcon ? 'btn__only-icon' : ''} ${img ? 'btn__icon' : ''}`}
            title={title}
        >
            {img ? <img src={img} alt={title} /> : null}
            {img && onlyIcon ? null : title}
            {children}
        </div>
    )
}

export default Btn
