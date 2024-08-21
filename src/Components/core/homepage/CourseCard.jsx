
const CourseCard = ({cardData,currentCard,setCurrentCard}) => { 
  return (
    <div className={`flex flex-col mr-10 hover:cursor-pointer p-6 justify-between h-[300px] ${cardData.heading===currentCard ? "bg-brown-25" : "bg-richblack-800"}`} onClick={() => setCurrentCard(cardData?.heading)} > 
      <div className={`font-inter font-bold text-xl ${cardData.heading===currentCard ? "text-black" : "text-white"}`}>
        <div className='mb-3'> 
        {cardData.heading} 
        </div>
        <div className='text-[16px] font-thin text-richblack-300' >
            {cardData.description} 
        </div> 
      </div>
      
      <div className='flex border-t-[2px] pt-2 text-[16px] border-richblack-400 border-dashed justify-between text-richblack-300 '>
        <div className='text-[16px]'>
            {cardData.level}
        </div>
        <div className='text-[16px]'>
            {cardData.lessionNumber} Lession 
        </div>
      </div>
    </div>
  )
}

export default CourseCard


