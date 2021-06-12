import React from 'react'
import './menu.css'
import { useHistory } from 'react-router-dom'

/*
items: [
    {
        title,
        url,
        disabled,
        active,
        onClick
    }
]
 */

const Menu = ({ items }) => {
    const history = useHistory()

    const doClick = (item) => {
        if (item.disabled) {
            return
        }
        if (item.url) {
            history.push(item.url)
        } else if (item.onClick) {
            item.onClick(item)
        }
    }

    return (
        <div className={`menu`}>
            {items.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className={`menu_item ${
                            item.disabled ? 'menu_item__disabled' : ''
                        } ${item.active ? 'menu_item__active' : ''}`}
                        onClick={() => {
                            doClick(item)
                        }}
                    >
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}

export default Menu
