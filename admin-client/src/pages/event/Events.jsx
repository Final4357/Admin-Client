import React from 'react'

const Events = () => {
  return (
    
<div className='flex flex-col items-center lg:mx-24'>
                    
                            <div key={i} className='flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-16 border-b border-gray-400 py-8 cursor-pointer event-card'>
                                <div className='flex-[1] text-center lg:text-left'>
                                    <h3 className='text-xl font-medium'>JUN</h3>
                                    <h2 className='text-2xl md:text-6xl font-bold'>26</h2>
                                </div>
                                <div className='flex-[3] space-y-3'>
                                    <h3 className='text-base font-semibold'>Class/Presentation/Seminar</h3>
                                    <h1 className='text-lg md:text-2xl font-bold'>IIUC Bio-X Talks in English (T.I.E.) - via Zoom </h1>
                                    <div class="flex w-full gap-4">
                                        <div className='w-7 h-7'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="su-inline-block su-flex-shrink-0 su-mt-2 md:su-mt-3 su-mr-06em su-w-[1em]"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <h3 className='text-xl font-medium'>Monday, June 26, 2023 | 12pm to 1pm</h3>
                                    </div>
                                    <div class="flex w-full gap-4">
                                        <div className='w-6 h-6 ' />
                                        <h3 className='text-xl font-medium'>Virtual</h3>
                                    </div>
                                </div>
                            </div>
                </div>
  )
}

export default Events