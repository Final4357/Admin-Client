import React from 'react'

const Jobviewmodel = (closeModal) => {


    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden no-scrollbar fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative left-20 w-1/2 h-1/2 my-6 mx-auto ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Job Info Update
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={closeModal}                  >
                                Close
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-4 flex-auto">
                            <div class="job-info space-y-2 mb-2 ">
                                <div className="">
                                    <div class="w-full flex  items-center space-x-8 mb-2">

                                        <div className='flex space-x-20'>
                                            <label
                                                class="block text-gray-700 text-sm "
                                                for="job-title"
                                            >
                                                Title
                                            </label>
                                            <div>: </div></div>
                                        <div>React Developer</div>
                                    </div>

                                    <div class="w-full flex  items-center space-x-8 mb-2  ">
                                        <div className='flex space-x-17'>
                                            <label
                                                class="block text-gray-700 text-sm "
                                                for="apply-link"
                                            >
                                                Salary
                                            </label>
                                            <div> : </div> </div>
                                        <div>40000-45000 BDT</div>
                                    </div>
                                    <div class="w-full flex  items-center space-x-8 mb-2">

                                        <div className='flex space-x-7'>
                                            <label
                                                class="block text-gray-700 text-sm "
                                                for="job-title"
                                            >
                                                Link to apply
                                            </label>
                                            <div>: </div></div>
                                        <div>www.enosislimited.com/apply</div>
                                    </div>

                                    <div class="w-full flex  items-center space-x-8 mb-2  ">
                                        <div className='flex space-x-5'>
                                            <label
                                                class="block text-gray-700 text-sm "
                                                for="apply-link"
                                            >
                                                Deadline Date
                                            </label>
                                            <div> : </div> </div>
                                        <div>20th july, 2023</div>
                                    </div>
                                    <div class="w-full flex  items-center space-x-8 mb-2">
                                        <div className='flex space-x-12'>
                                            <label
                                                class="block text-gray-700 text-sm "
                                                for="job-title"
                                            >
                                                Job Type
                                            </label>
                                            <div> : </div></div>
                                        <div>Fulltime</div>
                                    </div>

                                    <div class="w-full flex  items-center space-x-8 mb-2  ">

                                        <div className='flex space-x-9'> <label
                                            class="block text-gray-700 text-sm "
                                            for="apply-link"
                                        >
                                            Experience
                                        </label>
                                            <div> : </div> </div>
                                        <div>Entry </div>
                                    </div>
                                    <div class="w-full flex  items-center space-x-8 mb-2  ">

                                        <div className='flex space-x-9'>
                                            <label
                                                class="block text-gray-700 text-sm "
                                                for="apply-link"
                                            >
                                                Description
                                            </label>
                                            <div> : </div></div>
                                        <div>Need a team worker who love to work as a team</div>
                                    </div>
                                </div>

                                <div class="w-full flex  items-center space-x-8 mb-2">

                                    <div className='flex space-x-13'>
                                        <label
                                            class="block text-gray-700 text-sm "
                                            for="job-title"
                                        >
                                            Location
                                        </label>
                                        <div> : </div></div>
                                    <div>Chittagong</div>
                                </div>
                                <div class="w-full flex  items-center space-x-8 mb-2  ">
                                    <div className='flex space-x-11'>
                                        <label
                                            class="block text-gray-700 text-sm "
                                            for="apply-link"
                                        >
                                            Company
                                        </label>
                                        <div> : </div></div>
                                    <div>Enosis Limited</div>
                                </div>

                                <div class="w-full flex  items-center space-x-8 mb-2">
                                    <div className='flex space-x-12'>  
                                    <label
                                        class="block text-gray-700 text-sm "
                                        for="job-title"
                                    >
                                        Category
                                    </label>
                                        <div> : </div></div>
                                    <div>Onsite</div>
                                </div>

                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

    )
}

export default Jobviewmodel