import React from 'react'
import inst from '../../../assets/Images/Instructor.png'
import TextHighlight from './TextHighlight'
import Button from './Button'
import { BiRightArrowAlt } from "react-icons/bi";

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>
            <div className='w-[50%]'>
                <img src={inst} alt='teacher' className='shadow-white' /> 
            </div>
            <div className='w-[50%] flex flex-col gap-10'>
                <div className='text-4xl font-semibold w-[50%]'>
                    Become an <TextHighlight text={"Instructor"} /> 
                </div>
                <p className='font-medium text-[16px] w-[80%] text-richblack-300'>Instructor from around the world teach millions of students on Studynotion. We provide the tools and skills to teach what you love.</p>
                <div className='flex'>
                <Button active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2'>    
                        Start Learning Today 
                        <BiRightArrowAlt/> 
                    </div>
                </Button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default InstructorSection
