import React from 'react'
import TextHighlight from './TextHighlight'
import cmp from '../../../assets/Images/Compare_with_others.png'
import knw from '../../../assets/Images/Know_your_progress.png'
import pln from '../../../assets/Images/Plan_your_lessons.png'
import Button from './Button'

const LearningLanguageSection = () => {
  return (
    <div className='mt-36 flex flex-col w-full '>
        <div className='text-center font-semibold text-4xl mt-7'>
            Your swiss knife for <TextHighlight text="learning any language" />   
        </div>
        <p className='text-center text-[16px] font-inter mx-auto mt-4 w-[50%]'>Using spin making learning multiple languages easy. With 20+ languages realistic voice-over, progress tracking, custom schedule and more </p>
        <div className='flex flex-row justify-center items-center mt-5 '>
            <img src={knw} className='object-contain translate-x-32' alt='know '/>
            <img src={cmp} className='object-contain z-10 ' alt='know '/>
            <img src={pln} className='object-contain -translate-x-36 -translate-y-4' alt='know '/>
        </div>
        <div className='flex justify-center mb-14'>
            <Button active={true} linkto={"/signup"}>
                <div >
                    Learn More
                </div>
            </Button>
        </div>
    </div>
  )
}

export default LearningLanguageSection
