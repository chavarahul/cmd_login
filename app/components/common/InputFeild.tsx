import React from 'react'

interface InputFeildProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputFeild: React.FC<InputFeildProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    onKeyDown
}) => {
    return (
        <div className='mt-1 flex'>
            <p className='text-white opacity-50'>{label}:</p>
            <input
                type={type}
                name={name}
                className='ml-1.5 bg-transparent border-none outline-none'
                autoComplete='off'
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default InputFeild