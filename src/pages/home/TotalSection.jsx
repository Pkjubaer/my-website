import React, { Component } from 'react';
import { FiSettings } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { LuSmartphone  } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";
import HeaderSection from './HeaderSection';

const tools = [
    {
        icons: FiSettings,
        title:'Customizable Settings',
        description: 'Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project',
    },
    {
        icons: IoCode,
        title:'Developer Friendly',
        description: 'Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project',
    },
    {
        icons: LuSmartphone,
        title:'Responsive Design',
        description: 'Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project',
    },
    {
        icons: CiCloudOn,
        title:'Cloud Intergration',
        description: 'Bangladesh is set to take a significant leap in healthcare innovation with the launch of a pilot project'
    }
] 

class TotalSection extends Component {
    render() {
        return (
            <div className='max-w-screen-2xl container mx-auto py-20 px-5 bg-amber-50'>
                {/*Heading section
                <div className='text-center mb-10'>
                    <p className='text-blue-600 font-semibold uppercase'>Explore your technology ideas!</p>
                    <h1 className='font-bold text-3xl lg:text-4xl text-gray-600 mt-3'>All in one solution for your projects</h1>
                </div>*/}
                <HeaderSection subheading="Explore your technology ideas!" heading="All in one solution for your projects" />
                {/* render tools here*/}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16'>
                    {
                        tools.map((tool, index) => (
                            <div key={index} className='flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer'>
                                <tool.icons className='text-blue-600 text-4xl mb-4' />
                                <h3 className='text-lg text-gray-800 font-bold'>{tool.title}</h3>
                                <p className='text-gray-600 mt-2'>{tool.description}</p>
                            </div>
                            
                        ))
                    }
                </div>
                <div className='text-center'>
                    <button className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'>
                        Explore More
                    </button>
                </div>
            </div>
        );
    }
}

export default TotalSection;