import React, { useState } from 'react'
import './data-input.css'

const DataInput = ({
    value,
    label,
    labelWidth,
    type,
    required,
    hint,
    disabled,
    placeholder,
    onChangeCallback,
}) => {
    const [inputValue, setInputValue] = useState(value)

    const doChange = (e) => {
        const someValue = e.target.value
        setInputValue(someValue)
        if (onChangeCallback) {
            onChangeCallback(someValue)
        }
    }

    return (
        <div className={'data-input_container'}>
            {label && (
                <div
                    className={'data-input_label'}
                    style={{ width: labelWidth || 150 }}
                >
                    {label}
                    {required && (
                        <span
                            className={'label_required'}
                            title={'Обязательно для заполнения'}
                        >
                            *
                        </span>
                    )}
                    {hint && (
                        <span className={'label_hint'} title={hint}>
                            ?
                        </span>
                    )}
                </div>
            )}
            <input
                type={type}
                className={`data-input ${
                    (!inputValue || inputValue === '') && required
                        ? 'data-input__required'
                        : ''
                }`}
                value={inputValue}
                placeholder={placeholder}
                disabled={disabled}
                onChange={doChange}
            />
        </div>
    )
}

export default DataInput
