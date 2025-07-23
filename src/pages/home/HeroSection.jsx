import React, { Component } from 'react';
import { FiArrowRight } from "react-icons/fi";
import bannerImg from "../../assets/banner.png"
import { FaRegPlayCircle } from "react-icons/fa";

class HeroSection extends Component {
   
    render() {
        return (
            <div style={{backgroundColor:'#F2F4F8'}}>
                <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row fustify-between items-center'>
                    {/* Left side */}
                    <div className='lg:w-1/2 text-center lg:text-left'>
                        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Create web design for businesses</h1>
                        <p className='text-lg text-gray-600 mb-6'>When using Tailwind CSS in your React application, there are several recommended ways to add custom CSS while maintaining Tailwind's utility-first approach. Here's how to do it properly</p>
                        <div className='flex flex-col md:flex-row justify-center gap-4 lg:justify-self-start'>
                            <button className='bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition'>
                                <span>Get Started</span>
                                <FiArrowRight />
                            </button>
                            <button className='border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition'>Contact-Us</button>
                        </div>
                    </div>
                    {/* right side */}
                    <div className='lg:w-1/2 mt-10 lg:mt-0 justify-end relative'>
                        <div className='relative group'>
                            <img src={bannerImg} alt="banner img" className='m-auto rounded-lg shadow-lg'/>
                            <button className='absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-75 transition z-0'>
                                <FaRegPlayCircle className='text-white text-5xl hover:text-red-600' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;