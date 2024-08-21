import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom' 
import { BiRightArrowAlt } from "react-icons/bi";
import TextHighlight from '../Components/core/homepage/TextHighlight'
import Button from '../Components/core/homepage/Button';
import banner from '../assets/Images/banner.mp4' 
import CodeBlocks from '../Components/core/homepage/CodeBlocks';
import Footer from '../Components/common/Footer';
import TimeLineSection from '../Components/core/homepage/TimeLineSection'
import LearningLanguageSection from '../Components/core/homepage/LearningLanguageSection' 
import InstructorSection from '../Components/core/homepage/InstructorSection';
import ExploreMore from '../Components/core/homepage/ExploreMore';
import ReviewSlider from '../Components/common/ReviewSlider';


const Home = () => {
  return (
    <div className='mx-auto flex items-center justify-center flex-col w-full'>
        {/* Section-1 */}
        <div className=' max-w-maxContent flex mx-auto flex-col relative w-11/12 items-center text-white justify-between'>
             
                <div className='mt-14 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                transition-all duration-200 hover:scale-95 w-fit'>  
                <Link to={"/signup"}  > 
                    <div className='flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200'>  
                        <p>Become An Instructor</p>
                        <BiRightArrowAlt />  
                    </div> 
                </Link>
                </div>
           

            <div className='text-center font-semibold text-4xl mt-7'>
                Empower Your Future With <TextHighlight text="Coding Skills" /> 
            </div>

            <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                With our online coding courses,you can learn at your own pace ,from anywhere in the world and get access to a wealth of resources,including hands-on projects,quizzes and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'> 
                <Button active={true} linkto={"/signup"}>
                    Learn More 
                </Button>
                <Button active={false} linkto={"/login"}> 
                    Book A Demo 
                </Button>
            </div>

            <div className='shadow-xl mx-3 my-12 shadow-blue-200 '> 
                <video muted loop autoPlay className='w-[1080px]' >
                    <source src={banner} type='video/mp4' /> 
                </video> 
            </div>

            <div className='w-full'> 
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={<div className='w-[100%] text-4xl font-semibold lg:w-[50%]'>
                        Unlock Your <TextHighlight text={"Coding Potential"} /> with our online Course 
                    </div>}
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={ 
                        {
                            btnText:"Try It Yourself" ,
                            link:"/login" ,
                            active:true 
                        }
                    }
                    ctabtn2={
                        {
                            btnText:"Learn More" ,
                            link:"/signup" ,
                            active:false  
                        }
                    }
                    codeColor={"text-yellow-25"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}  
                />  
            </div>

            <div className='w-full'>
                <CodeBlocks
                    position={"lg:flex-row-reverse"} 
                    heading={
                    <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                        Start <TextHighlight text={"coding in seconds"} />
                    </div>
                    }
                    subheading={
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={{
                    btnText: "Continue Lesson",
                    link: "/login",
                    active: true,
                    }}
                    ctabtn2={{
                    btnText: "Learn More",
                    link: "/signup",
                    active: false,
                    }}
                    codeColor={"text-white"}
                    codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    backgroundGradient={<div className="codeblock2 absolute"></div>}
                />
            </div>

            <ExploreMore/> 
        
        </div>

        {/* Section-2 */}
        <div className='bg-pure-greys-5 text-richblack-700 w-full flex flex-col justify-center items-center'>
                <div className='homepage_bg h-[320px] w-full'>
                    <div className='w-11/12 flex-col max-w-maxContent flex items-center gap-5 mx-auto'>
                    <div className='h-[200px]'></div>
                        <div className='flex flex-row gap-7 text-white'>
                            <Button active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Explore All Catalog 
                                    <BiRightArrowAlt/>
                                </div> 
                            </Button> 
                            <Button active={false} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Learn More  
                                </div> 
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 flex-col max-w-maxContent flex justify-center items-center gap-7 '>
                    <div className='flex gap-3 justify-center items-center w-full'>
                        <div className=' font-semibold text-3xl mt-7 w-[50%] mb-7'>
                            Get the skills you need for a <TextHighlight text={"job that is in demand "}/>
                        </div>
                        <div className='w-[50%] mt-7 mb-7 text-[16px]'>
                            <div>
                                The modern Studynotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div> 
                            <div className='flex mt-5'>
                                <Button active={true} linkto={"/signup"}> 
                                    <div className='flex items-center gap-3'>
                                        Learn More 
                                    </div> 
                                </Button> 
                            </div>
                        </div>
                    </div>
                </div>
                
                <TimeLineSection />
                <LearningLanguageSection />   

        </div>

        {/* Section-3 */}
        <div className='w-full mx-auto max-w-maxContent flex flex-col items-center justify-center gap-8 bg-richblack-900 text-white'>
                    <InstructorSection/> 
                    <h2 className=' w-full text-center text-4xl font-semibold mt-10 '>Review From Other Learners</h2>
                    <ReviewSlider/> 
        </div>


        {/* Footer  */} 
        <Footer/> 
    </div>
  )
}

export default Home


