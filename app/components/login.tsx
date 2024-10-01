'use client';
import React, { useEffect, useRef, useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import InputFeild from './common/InputFeild';
import CloseIcon from '@mui/icons-material/Close';
import gsap from 'gsap';

const Login = () => {

    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
    const [isNameSubmitted, setIsNameSubmitted] = useState(false);
    const [isPasswordSubmitted, setIsPasswordSubmitted] = useState(false);

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((d) => ({ ...d, [name]: value }));
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, feild: string) => {
        if (e.key === 'Enter') {
            if (feild === 'name' && formData.name) {
                setIsNameSubmitted(true);
                setTimeout(()=>{
                    emailInputRef?.current?.focus();
                },1);
            } else if (feild === 'email' && formData.email) {
                setIsEmailSubmitted(true);
                setTimeout(()=>{
                    passwordInputRef?.current?.focus();
                },1)
            } else if (feild === 'password' && formData.password) {
                setIsPasswordSubmitted(true);
            }
        }
    }

    const handleReset = () => {
        setIsNameSubmitted(false);
        setIsEmailSubmitted(false);
        setIsPasswordSubmitted(false);
        setFormData({ email: '', password: '', name: '' })
    }

    useEffect(()=>{
        gsap.fromTo('.up',{
            y:'-150px',
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.8,
            stagger:0.2
        })
    },[isPasswordSubmitted])

    return (
        <section className="Scroller h-2/3 w-[62%] max-md:w-[90%] rounded-[10px] glass font-mono shadow-xl backdrop-blur"
        >
            <div
                className="w-full relative h-10 flex items-end max-md:justify-between justify-start bg-slate-900 rounded-tr-[10px] rounded-tl-[10px]"
            >
                <div className="w-1/4 max-md:w-1/2 -ml-1 h-[76%] relative flex-center">
                    <div className="w-[90%] h-full flex-bet relative glasser rounded-tr-[10px] rounded-tl-[10px] pt-1 pl-2">
                        <div className="flex mb-1">
                            <LoginIcon
                                className='w-2.5 h-2.5 '
                            />
                            <p className='ml-3 text-md'>Login</p>
                        </div>
                        <CloseIcon className='text-white w-3 h-3 mb-1 mr-1' />
                    </div>
                </div>
                <div className="w-1/2  relative h-[70%] flex-center">
                    <p>@rahul.developer</p>
                </div>
            </div>
            <div className="py-4 px-3 Scroller overflow-y-scroll h-[90%] ">
                <p className='flex overflow-y-hidden'><span className=''>{">  "}Hey there! We are thrilled to connect! 🔗</span> </p>
                <div className="mt-2 flex-colmn">
                    <p className='overflow-y-hidden'><span className="">{">  "}Let{"'"}s start with <span className="text-white">your name</span></span></p>
                    <div className="ml-4 mt-1 flex">
                        <InputFeild
                            label='Enter name'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onKeyDown={(e) => handleKeyDown(e, 'name')}
                        />
                    </div>
                </div>
                {
                    isNameSubmitted && (
                        <div className="mt-2 flex-colmn">
                            <p>{">  "}Awesome {formData.name}! And what{"'"}s  <span className='text-white'>your email?</span></p>
                            <div className="ml-4 mt-1 flex">
                                <InputFeild
                                    type="text"
                                    name="email"
                                    label='Enter email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, 'email')}
                                    ref={emailInputRef}
                                />
                            </div>
                        </div>
                    )
                }
                {
                    isEmailSubmitted && (
                        <div className='mt-2 flex-colmn'>
                            <p>{">  "}Prefect, Now Let{"'"}s set <span className='text-white'>your password</span></p>
                            <div className="ml-4 mt-1 flex">
                                <InputFeild
                                    label="Enter password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, 'password')}
                                    ref={passwordInputRef}
                                />
                            </div>
                        </div>
                    )
                }
                {
                    isPasswordSubmitted && (
                        <div className='mt-2 flex-colmn overflow-y-hidden'>
                            <div className="up">
                            <p>{">  "}Beautiful! Here{"'"}s what we{"'"}ve got:</p>
                            <div className="ml-4 mt-1 flex-colmn">
                                <p>Name: {formData.name}</p>
                                <p>Email: {formData.email}</p>
                            </div>
                            <div className="ml-4 mt-4 flex">
                                <button
                                    className='rounded bg-indigo-500 px-3 py-1 text-base text-white transition-opacity hover:opacity-90'
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={handleReset}
                                    className='rounded bg-slate-100 px-3 py-1 ml-5 text-base text-black transition-opacity hover:opacity-90'
                                >
                                    Reset
                                </button>
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Login;