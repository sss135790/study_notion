import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];

const TimeLineSection = () => {
  return (
    <div >
        <div className='flex flex-row gap-15 items-center'>
            <div className="w-[45%] flex flex-col gap-12">
                {
                    TimeLine.map((ele,i)=>{
                        return (
                            <div className="flex flex-row w-full " key={i}>
                                <div className="flex w-[50px] h-[50px] bg-white justify-center rounded-3xl mr-4 items-center">
                                    <img src={ele.Logo} alt="img" /> 
                                </div>
                                <div className="flex flex-col mb-3">
                                    <div className="text-[18px] font-inter font-semibold mb-1">
                                        {ele.Heading}
                                    </div>
                                    <div className="text-base font-inter">
                                        {ele.Description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>  

           
            <div className="relative shadow-blue-200 ">
                <img src={TimeLineImage} alt="img" className="object-cover h-[400px] lg:h-fit mb-9 mt-9 ml-9 shadow-blue-200 shadow-[0px_0px_30px_0px]" /> 
                <div className="pl-16 justify-center items-center mr-5 translate-x-[16%] translate-y-[-85%] absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10"> 
                    <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 mr-6">
                        <p className="text-3xl font-bold">10</p>
                        <p className="text-caribbeangreen-300 text-sm w-36">Years Of Experience </p>
                    </div>
                    <div className="pr-14 flex flex-row gap-5 items-center">
                        <p className="text-3xl font-bold"> 250 </p>
                        <p className="text-caribbeangreen-300 text-sm w-32">Types Of Courses</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimeLineSection
