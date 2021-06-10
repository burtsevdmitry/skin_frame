import React from 'react'
import './main-menu.css'
import { NavLink, useLocation } from 'react-router-dom'

/*
    Описание бренда
    brand: {
        src,
        url,
        title
    }
    items, itemsBottom: [
        {
            src,
            url,
            title,
            exact: boolean
            type: default = 'button' ('divider', 'label', 'button')
        }
    ]
 */

const MainMenu = ({ brand, items, itemsButtom }) => {
    const location = useLocation()

    const drawItems = (aClassName, aItems) => {
        return (
            <div className={aClassName}>
                {aItems.map((item, idx) => {
                    const active =
                        (item.exact && item.url.endsWith(location.pathname)) ||
                        (!item.exact && location.pathname.indexOf(item.url))

                    if (item.type === 'divider') {
                        return <div key={idx} className={'main-menu_divider'} />
                    } else if (item.type === 'label') {
                        return (
                            <div key={idx} className={'main-menu_label'}>
                                {item.title}
                            </div>
                        )
                    } else {
                        return (
                            <NavLink
                                key={idx}
                                className={`main-menu_item ${
                                    active ? 'main-menu_item__active' : ''
                                }`}
                                to={item.url ? item.url : './'}
                                title={item.title ? item.title : ''}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt ? item.alt : ''}
                                />
                            </NavLink>
                        )
                    }
                })}
            </div>
        )
    }

    return (
        <div className={'main-menu'}>
            {brand && brand.src ? (
                <NavLink
                    className={'main-menu_brand'}
                    to={brand.url ? brand.url : './'}
                >
                    <img src={brand.src} alt={brand.alt ? brand.alt : ''} />
                </NavLink>
            ) : null}
            <div className={'main-menu_layout'}>
                {items && items.length > 0
                    ? drawItems('main-menu_items', items)
                    : null}
                {itemsButtom && itemsButtom.length > 0
                    ? drawItems('main-menu_bottom', itemsButtom)
                    : null}
            </div>
        </div>
    )
}

export default MainMenu
