import React from 'react'
import './top-menu.css'
import { NavLink, useLocation } from 'react-router-dom'

/*
items: [
    {
        title,
        url,
        exact: boolean
    }
]
 */

const TopMenu = ({ items, itemsRight }) => {
    const location = useLocation()

    return (
        <div className={'top-menu'}>
            {items && items.length > 0 ? (
                <div className={'top-menu_items'}>
                    {items.map((item, idx) => {
                        const active =
                            (item.exact &&
                                item.url.endsWith(location.pathname)) ||
                            (!item.exact &&
                                location.pathname.indexOf(item.url) >= 0)
                        return (
                            <div
                                key={idx}
                                className={`top-menu_item ${
                                    active ? 'top-menu_item__active' : ''
                                }`}
                            >
                                <NavLink
                                    to={item.url ? item.url : './'}
                                    exact={true}
                                >
                                    {item.title}
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            ) : null}
            {itemsRight && itemsRight.length > 0 ? (
                <div className={'top-menu_right'}>
                    {itemsRight.map((item, idx) => {
                        return (
                            <div key={idx} className={'top-menu_component'}>
                                {item.component}
                            </div>
                        )
                    })}
                </div>
            ) : null}
        </div>
    )
}

export default TopMenu
