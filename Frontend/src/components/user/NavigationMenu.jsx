import React from 'react'
import { SquareCheckBig, LayoutDashboard, BookMarked, ChartNoAxesCombined } from 'lucide-react';

const NavigationMenu = () => {
    return (
        <div className='w-full h-full backdrop-blur-3xl bg-gray-800/80  rounded-4xl shadow-2xl'>
            <div className='h-full flex flex-col items-center justify-between'>
                <div className='h-[43%] flex flex-col items-center justify-between w-full'>
                    <div className='flex flex-col pt-4 self-start pl-6'>
                        <h2 className='font-normal text-2xl text-gray-100'>
                            <span className='font-semibold text-3xl text-[#f59e0b]'>S</span>
                            tudy
                            <span className='font-semibold text-3xl text-[#f59e0b]'>M</span>
                            ate
                        </h2>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <ul className='w-full flex flex-col font-extralight text-[1rem] justify-center items-center gap-4 text-gray-50'>
                            <li className='flex gap-2 items-center pl-4 hover:bg-[#f59e0b] py-2 rounded-4xl w-[80%] cursor-pointer transition-all duration-300 ease-in'>
                                <LayoutDashboard className='h-[20px] w-[20px]' />
                                <p>Dashboard</p>
                            </li>
                            <li className='flex gap-2 items-center pl-4 hover:bg-[#f59e0b] py-2 rounded-4xl w-[80%] cursor-pointer transition-all duration-300 ease-in'>
                                <SquareCheckBig className='h-[20px] w-[20px]' />
                                <p>Tasks</p>
                            </li>
                            <li className='flex gap-2 items-center pl-4 hover:bg-[#f59e0b] py-2 rounded-4xl w-[80%] cursor-pointer transition-all duration-300 ease-in'>
                                <BookMarked className='h-[20px] w-[20px]' />
                                <p>Subjects</p>
                            </li>
                            <li className='flex gap-2 items-center pl-4 hover:bg-[#f59e0b] py-2 rounded-4xl w-[80%] cursor-pointer transition-all duration-300 ease-in'>
                                <ChartNoAxesCombined className='h-[20px] w-[20px]' />
                                <p>Analytics</p>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* fix later */}
                {/* <div className='h-[30%] w-full mx-3 bg-gray-500'>

                            </div> */}
            </div>
        </div>
    )
}

export default NavigationMenu;