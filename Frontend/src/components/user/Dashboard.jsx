import React from 'react'
import NavigationMenu from './NavigationMenu';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center bg-gray-200/10'>
            <div className='w-full h-full flex gap-3 p-6'>
                <div className='w-[15%] h-full'>
                    <NavigationMenu />
                </div>

                <div className='w-[85%] h-full border-black border-2 flex items-center justify-center'>
                    <div className='flex items-center justify-between h-[10%] w-full border-2 border-pink-500'>
                        <p>Welcome Back Malav</p>

                        <div>
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </PopoverTrigger>

                                <PopoverContent className="w-80">
                                    <div className='flex gap-4 items-center space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <h4 className='font-medium '>Malav Adeshara</h4>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>

                                    <div className='flec flex-col gap-3 text-gray-600'>
                                        <div>
                                            <i className="ri-user-line"></i>
                                            <Button variant="link"><Link to='/profile'>View Profile</Link></Button>
                                        </div>
                                        <div>
                                            <i className="ri-logout-box-r-line"></i>
                                            <Button variant="link">Log Out</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
