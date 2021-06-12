import React, { useState } from 'react'
import './data-toggle.css'

const DataToggle = ({
    value,
    label,
    labelWidth,
    disabled,
    readonly,
    onChangeCallback,
    align,
}) => {
    const [inputValue, setInputValue] = useState(value)

    const doChange = () => {
        if (disabled || readonly) {
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
                    style={
                        align === 'center'
                            ? { marginLeft: 'auto', marginRight: 'auto' }
                            : align === 'right'
                            ? { marginLeft: 'auto' }
                            : {}
                    }
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
