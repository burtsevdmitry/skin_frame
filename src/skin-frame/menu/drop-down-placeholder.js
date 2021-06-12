import React, { useCallback, useEffect, useRef, useState } from 'react'
import './drop-down-menu.css'

const DropDownPlaceholder = ({
    buttonComponent,
    align,
    dropDownWidth,
    children,
}) => {
    const [dropped, setDropped] = useState(false)

    const box = useRef(null)

    const handleOutsideClick = useCallback(
        (event) => {
            if (!dropped) {
                return
            }
            if (box.current && !box.current.contains(event.target)) {
                document.removeEventListener('click', handleOutsideClick, false)
                setDropped(false)
            }
        },
        [dropped]
    )

    useEffect(() => {
        if (dropped) {
            document.addEventListener('click', handleOutsideClick, false)
        }
    }, [dropped, handleOutsideClick])

    return (
        <div className="dropdown">
            <span
                onClick={() => {
                    setDropped(true)
                }}
            >
                {buttonComponent}
            </span>
            <div
                ref={box}
                style={{ width: dropDownWidth || 160 }}
                className={`dropdown_placeholder ${
                    align === 'right' ? 'dropdown_placeholder__right' : ''
                } ${dropped ? 'dropdown_placeholder__visible' : ''}`}
            >
                {children}
            </div>
        </div>
    )
}

export default DropDownPlaceholder
