import React, { Fragment } from 'react'

const EventUpdate = () => {
  return (
   
        <Fragment>
        <main class="main bg-white px-2 md:py-6">
            <div class="w-full max-w-xl mx-auto">
                <div action="" method="post">
                    <h1 class="text-2xl font-bold mb-2">Create New Event</h1>
    
                    <div class="job-info space-y-4 mb-4 ">
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="block text-gray-700 text-sm mb-2"
                                    for="job-title"
                                >
                                    Title
                                </label>
                                <input
                                  //  ref={(input) => (titleRef = input)}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    id="Event-title"
                                    name="Event-title"
                                    placeholder="ex: contest for Junior programmmer of iiuc "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="block text-gray-700 text-sm mb-2"
                                    for="job-title"
                                >
                                    Topic
                                </label>
                                <input
                                  //  ref={(input) => (titleRef = input)}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    id="Event-topic"
                                    name="Event-topic"
                                    placeholder="ex: Programing contest "
                                    autofocus
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="message"
                                class="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Description
                            </label>
                            <textarea
                              //  ref={(input) => (descriptionRef = input)}
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your thoughts here..."
                            ></textarea>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="block text-gray-700 text-sm mb-2"
                                    for="job-title"
                                >
                                    Venue
                                </label>
                                <input
                                  //  ref={(input) => (titleRef = input)}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    id="Event-venue"
                                    name="Event-venue"
                                    placeholder="ex: At central library of IIUC "
                                    autofocus
                                />
                            </div>
                        </div>
                        
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="block text-gray-700 text-sm mb-2"
                                    for="apply-link"
                                >
                                    Link to apply
                                </label>
                                <input
                                  //  ref={(input) => (linktoRef = input)}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="https://www.djangoproject.com/apply"
                                />
                            </div>
                            <div class=" w-full">
                                <label
                                    class="block text-gray-700 text-sm mb-2"
                                    for="apply-link"
                                >
                                    Deadline Date
                                </label>
                                <input
                                 //   ref={(input) => (dateRef = input)}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="date"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="https://www.djangoproject.com/apply"
                                />
                            </div>
                        </div>
                        <div class="flex w-full justify-between  gap-4 ">
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="block text-gray-700 text-sm mb-2">
                                    Starting Time
                                </label>
                                <input
                                 //   ref={(input) => (companyRef = input)}
                                    type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="company"
                                    name="company"
                                    placeholder="ex: 10 AM"
                                />
                            </div>
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="block text-gray-700 text-sm mb-2">
                                    Ending Time
                                </label>
                                <input
                                 //   ref={(input) => (companyRef = input)}
                                    type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    id="company"
                                    name="company"
                                    placeholder="ex: 1 PM"
                                />
                            </div>
    
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="block text-gray-700 text-sm mb-2"
                                    for="apply-link"
                                >
                                    Event website
                                </label>
                                <input
                                  //  ref={(input) => (linktoRef = input)}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="https://www.djangoproject.com/apply"
                                />
                            </div>
                            <div class=" w-full">
                                <label
                                    class="block text-gray-700 text-sm mb-2"
                                    for="apply-link"
                                >
                                    Open To
                                </label>
                                <div class="flex items-center space-x-2">
                                        <div className='flex justify-between'>
                                            <input
                                                // onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                                // checked={selectType.includes("Fulltime")}
                                                id="gaming"
                                                type="checkbox"
                                                value="Fulltime"
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                for="gaming"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    
                                            >
                                                Alumni
                                            </label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <input
                                                // onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                                // checked={selectType.includes("Fulltime")}
                                                id="gaming"
                                                type="checkbox"
                                                value="Fulltime"
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                for="gaming"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    
                                            >
                                                Students
                                            </label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <input
                                                // onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                                // checked={selectType.includes("Fulltime")}
                                                id="gaming"
                                                type="checkbox"
                                                value="Fulltime"
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                for="gaming"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    
                                            >
                                                Member
                                            </label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <input
                                                // onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                                // checked={selectType.includes("Fulltime")}
                                                id="gaming"
                                                type="checkbox"
                                                value="Fulltime"
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                for="gaming"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    
                                            >
                                                Staff
                                            </label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <input
                                                // onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                                // checked={selectType.includes("Fulltime")}
                                                id="gaming"
                                                type="checkbox"
                                                value="Fulltime"
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                for="gaming"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    
                                            >
                                                Faculty
                                            </label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                        {/* <button
                            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded"
                            type="submit"
                        // onClick={onCreate}
                        > */}
                            Update Event 
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </Fragment>
   
  )
}

export default EventUpdate