import React, { useState, useEffect } from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot
} from '../ui/input-otp';

const OtpValidation = () => {

    useEffect(() => {
        const movingObject = document.getElementById('moving-object');

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            movingObject.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [value, setValue] = useState('');

    return (
        <div className='flex flex-col items-center justify-center h-[100vh] w-full bg-[#f59e0b]/10 relative overflow-hidden'>

            {/* Moving Object Behind the Glass */}
            <div
                id='moving-object'
                className='fixed top-0 left-0 z-50 w-72 h-72 bg-[#f59e0b]/30 rounded-full pointer-events-none transition-transform duration-300 ease-out blur-3xl will-change-transform'
            ></div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='font-bold text-3xl self-start'>Verify Email</h2>

                <p className='text-xl'>
                    A verification code has been sent to you.
                    <br />
                    Enter the code below
                </p>

                <div className='flex flex-col items-center justify-center gap-4 w-full'>
                    <div className='w-full'>
                        <InputOTP
                            maxLength={6}
                            value={value}
                            onChange={(value) => setValue(value)}
                        >
                            <InputOTPGroup className="flex justify-between w-full">
                                <InputOTPSlot index={0} className="h-12 w-12 text-2xl !rounded-xl border border-[#f59e0b]/80" />
                                <InputOTPSlot index={1} className="h-12 w-12 text-2xl !rounded-xl border border-[#f59e0b]/80" />
                                <InputOTPSlot index={2} className="h-12 w-12 text-2xl !rounded-xl border border-[#f59e0b]/80" />
                                <InputOTPSlot index={3} className="h-12 w-12 text-2xl !rounded-xl border border-[#f59e0b]/80" />
                                <InputOTPSlot index={4} className="h-12 w-12 text-2xl !rounded-xl border border-[#f59e0b]/80" />
                                <InputOTPSlot index={5} className="h-12 w-12 text-2xl !rounded-xl border border-[#f59e0b]/80" />
                            </InputOTPGroup>
                        </InputOTP>

                    </div>

                    <div className='w-full'>
                        <button className='w-full border-3 bg-[#f59e0b]/70 border-[#f59e0b]/40 py-2.5 rounded-2xl flex gap-2 items-baseline justify-center hover:gap-4 transition-all duration-200 ease-in-out hover:bg-[#f59e0b]/90 hover:border-gray-600 hover:text-shadow-lg'>
                            <p>Verify & Register</p>
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </div>

                <div className='w-full flex items-baseline justify-between'>
                    <div className='flex gap-1 items-baseline justify-center text-lg hover:gap-3 transition-all duration-200 cursor-pointer hover:text-shadow-lg hover:text-[#f59e0b] ease'>
                        <i className="ri-history-line"></i>
                        <p>Resend OTP</p>
                    </div>

                    <div className='flex gap-1 items-baseline justify-center text-lg hover:gap-3 transition-all duration-200 cursor-pointer hover:text-shadow-lg hover:text-[#f59e0b] ease'>
                        <i className="ri-arrow-left-s-line"></i>
                        <p>Back to login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpValidation;