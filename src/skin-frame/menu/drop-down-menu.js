import React from 'react'
import Menu from './menu'
import './drop-down-menu.css'

const DropDownMenu = ({ menuItems, align, children }) => {
    return (
        <div className="dropdown">
            {children}
            <div
                className={`dropdown_content ${
                    align === 'right' ? 'dropdown_content__right' : ''
                }`}
            >
                <Menu items={menuItems} />
            </div>
        </div>
    )
}

export default DropDownMenu
