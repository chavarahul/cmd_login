import React, { forwardRef, useState, useEffect } from 'react';

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, type, name, value, onChange, onKeyDown }, ref) => {
        const [displayedLabel, setDisplayedLabel] = useState('');

        useEffect(() => {

            const targetText = label.split('');
            let currentIndex = 0;
            const time = 80;
            // const soundEffect = new Audio('https://res.cloudinary.com/dxfujspwu/video/upload/v1727786018/audio2_opuvqo.mp3');

            const randomChars = () => {
                const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
                return chars[Math.floor(Math.random() * targetText.length)]
            }

            let newText = Array(targetText.length).fill('').map(randomChars);
            setDisplayedLabel(newText.join(''))

            const interval = setInterval(() => {
                // soundEffect.currentTime = 0;
                // soundEffect.play();
                if (currentIndex < targetText.length){
                    newText = newText.map((_,index:number)=>(
                        index < currentIndex ? targetText[index] : randomChars()
                    ));


                    newText[currentIndex] = targetText[currentIndex];
                    setDisplayedLabel(newText.join(''));
                    currentIndex++;
                }else{
                    clearInterval(interval);
                }
            }, time);

            return ()=> clearInterval(interval)

        }, [label]);

        return (
            <div className='mt-1 flex'>
                <p className='text-white opacity-50'>{displayedLabel}:</p>
                <input
                    ref={ref}
                    type={type}
                    name={name}
                    className='ml-1.5 bg-transparent border-none outline-none'
                    autoComplete='off'
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;
