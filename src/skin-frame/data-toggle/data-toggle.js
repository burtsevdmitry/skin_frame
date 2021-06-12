import React, { useState } from 'react'
import './data-toggle.css'

const DataToggle = ({
    value,
    label,
    labelWidth,
    disabled,
    onChangeCallback,
}) => {
    const [inputValue, setInputValue] = useState(value)

    const doChange = () => {
        if (disabled) {
            return
        }
        setInputValue(!inputValue)
        if (onChangeCallback) {
            onChangeCallback(inputValue)
        }
    }
    return (
        <div className={'data-toggle_container'}>
            {label && (
                <div
                    className={'data-toggle_label'}
                    style={{ width: labelWidth || 150 }}
                >
                    {label}
                </div>
            )}
            <div className={`data-toggle_wrapper`} onClick={doChange}>
                <div
                    className={`data-toggle 
                        ${inputValue && 'data-toggle__checked'}
                        ${disabled && 'data-toggle__disabled'}`}
                >
                    <div className={'data-toggle_thumb'} />
                </div>
            </div>
        </div>
    )
}

export default DataToggle
