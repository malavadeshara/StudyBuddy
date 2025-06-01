import React, { useEffect } from 'react';
import loginImage from '../../assets/LoginImage.svg';

const Login = () => {

    useEffect(() => {
        const movingObject = document.getElementById('moving-object');

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            movingObject.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='h-[100vh] w-full flex items-center justify-center bg-gradient-to-r from-gray-50 via-[#f59e0b]/10 to-[#f59e0b]/20 relative overflow-hidden'>

            {/* Moving Object Behind the Glass */}
            <div
                id='moving-object'
                className='fixed top-0 left-0 z-50 w-72 h-72 bg-[#f59e0b]/30 rounded-full pointer-events-none transition-transform duration-300 ease-out blur-3xl will-change-transform'
            ></div>

            <div className='flex justify-center items-center w-full h-full relative z-10'>

                <div className='w-[50%] h-full px-24 py-16 flex items-center justify-center'>
                    <form action="" className='border-3 border-[#f59e0b]/20 h-full w-full flex flex-col justify-between text-gray-800 items-center p-12 bg-[#f59e0b]/10 backdrop-blur-3xl rounded-4xl z-10'>
                        <p className='font-bold text-2xl text-shadow-md'>Login</p>

                        <div className='w-full flex flex-col gap-6'>
                            <div className='w-full flex items-center justify-center p-1'>
                                <div className='border-3 border-black rounded-full flex items-center justify-center w-[180px] h-[180px]' >
                                    <img src="https://www.svgrepo.com/show/316857/profile-simple.svg" alt="profilePicture" />
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-6'>
                                <label htmlFor="email" className='flex flex-col gap-2 font-normal text-lg'>
                                    <p>Email Address</p>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="test@gmail.com"
                                        className='border-b-2 border-[#f59e0b] focus:outline-none'
                                    />
                                </label>

                                <label htmlFor="password" className='flex flex-col gap-2 font-normal text-lg'>
                                    <p>Password</p>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="********"
                                        className='border-b-2 border-[#f59e0b] focus:outline-none'
                                    />
                                </label>
                            </div>
                        </div>

                        <div className='flex items-center justify-center self-end mr-10'>
                            <button className='flex items-baseline justify-center gap-1 font-semibold text-lg text-gray-[700] hover:text-[#f59e0b] hover:text-shadow-md transition-all duration-100 hover:cursor-pointer hover:gap-2'>
                                Login
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    </form>
                </div>

                <div className='w-[50%] h-full flex flex-col items-start justify-between relative px-24 py-16'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <h1 className='font-extrabold text-3xl text-[#f59e0b]/95'>Welcome,</h1>
                            <h2 className='font-bold text-xl text-[#f59e0b]/90'>Your Smart Study Mate awaits!!</h2>
                        </div>

                        <div className='font-normal text-sm flex flex-col gap-2 text-gray-700'>
                            <p>
                                Log in to access your tools, resources, and personalized learning experience.
                            </p>

                            <p>Please click Signup below if you don't have an account!</p>
                        </div>

                        <div>
                            <button className='flex items-baseline justify-center gap-1 text-[1rem] text-gray-[700] hover:text-[#f59e0b]/95 hover:text-shadow-md transition-all duration-100 hover:cursor-pointer hover:gap-2'>
                                Signup
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-[70%] h-[70%] self-end'>
                        <img src={loginImage} alt="loginImage" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;