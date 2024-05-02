import React, { useState } from 'react';

function captialize(mySentence){
    const words = mySentence.split(" ");

    const result = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");

    return result;
}

const JobCards = ({content}) => {
    const title = captialize(content.jobRole);
    const location = captialize(content.location);

    return (
        <div className='shadow-lg p-8 rounded-3xl'>
            <div className='mt-6 text-[#8b8b8b]'>{title}</div>
            <div className='text-sm'>{location}</div>
            <div className='mt-1'>Estimated Salary: 
                {content.minJdSalary && content.maxJdSalary ? <span> {content?.minJdSalary} - {content.maxJdSalary} </span>: 
                    <span> {content.minJdSalary ? content.minJdSalary: content.maxJdSalary} </span>
                }
                LPA
            </div>
            <div className='mt-2 font-bold'>Job Description</div>
            <div className='relative'>
                <div style={{
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    display: '-webkit-box'
                    }}>{content.jobDetailsFromCompany}
                    
                </div>
                <div className='text-center absolute bottom-0 bg-white/90 w-full text-indigo-500 font-bold '>
                    See more
                </div>
            </div>
            <div className='text-[#8b8b8b] mt-6'>Minimum Experience</div>
            <div>7 years</div>
            <div className='my-4'>
                <button className='w-full bg-teal-700 px-8 py-2 rounded-md text-white'>
                    Easy Apply
                </button>
            </div>
            <div>
                <button className='w-full bg-indigo-700 px-8 py-2 rounded-md text-white'>
                    Unlock referral asks
                </button>
            </div>
        </div>
    );
};

export default JobCards;