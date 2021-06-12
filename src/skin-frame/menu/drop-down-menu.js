import React from 'react'
import Menu from './menu'
import './drop-down-menu.css'
import DropDownPlaceholder from './drop-down-placeholder'

const DropDownMenu = ({ menuItems, align, dropDownWidth, children }) => {
    return (
        <DropDownPlaceholder
            align={align}
            dropDownWidth={dropDownWidth}
            buttonComponent={children}
        >
            <Menu items={menuItems} />
        </DropDownPlaceholder>
    )
}

export default DropDownMenu
