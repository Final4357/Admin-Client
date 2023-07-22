import React, { Fragment } from 'react'
import Checkbox from '../Checkbox'

const EventUpdateModel = ({ setShowUpdateModal }) => {
    return (
        <Fragment>
            <div
                className="flex justify-center items-center overflow-x-hidden no-scrollbar fixed inset-0 z-999 outline-none focus:outline-none"
            >
                <div onClick={() => setShowUpdateModal(false)} className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
                <div className="relative left-24 w-1/2 h-fit">
                    <div className="p-3 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between pb-1 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Update Event
                            </h3>
                            <button
                                className="p-3 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none rounded-full hover:bg-gray-2"
                                onClick={() => setShowUpdateModal(false)}                  >
                                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z" fill=""></path></svg>
                            </button>
                        </div>
                        <div class="space-y-2 mt-2 mx-3">
                            <div className="flex justify-between gap-4 ">
                                <div class=" w-full">
                                    <label
                                        class="mb-1 block text-black dark:text-white"
                                        for="job-title"
                                    >
                                        Title
                                    </label>
                                    <input
                                        //  ref={(input) => (titleRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="text"
                                        id="Event-title"
                                        name="Event-title"
                                        placeholder="ex: Junior Programming Contest "
                                        autoFocus
                                    />
                                </div>
                                <div class=" w-full">
                                    <label
                                        class="mb-1 block text-black dark:text-white"
                                        for="job-title"
                                    >
                                        Topic
                                    </label>
                                    <input
                                        //  ref={(input) => (titleRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="text"
                                        id="Event-topic"
                                        name="Event-topic"
                                        placeholder="ex: Programing contest / Presentation / ......"
                                        autofocus
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 ">
                                <div class=" w-full">
                                    <label
                                        class="mb-1 block text-black dark:text-white"
                                        for="job-title"
                                    >
                                        Venue
                                    </label>
                                    <input
                                        //  ref={(input) => (titleRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="text"
                                        id="Event-venue"
                                        name="Event-venue"
                                        placeholder="ex: At central library of IIUC "
                                        autofocus
                                    />
                                </div>
                                <div class=" w-full">
                                <label
                                    class="mb-1 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Event website
                                </label>
                                <input
                                    //  ref={(input) => (linktoRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="https://www.djangoproject.com/event"
                                />
                            </div>
                            </div>

                            <div className="flex justify-between gap-4 ">
                                <div class=" w-full">
                                    <label
                                        class="mb-1 block text-black dark:text-white"
                                        for="apply-link"
                                    >
                                        Link (optional)
                                    </label>
                                    <input
                                        //  ref={(input) => (linktoRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="text"
                                        id="apply-link"
                                        name="apply-link"
                                        placeholder="e.g. Registration link and etc"
                                    />
                                </div>
                                <div class=" w-full">
                                    <label
                                        class="mb-1 block text-black dark:text-white"
                                        for="apply-link"
                                    >
                                        Date
                                    </label>
                                    <input
                                        //   ref={(input) => (dateRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        type="date"
                                        id="event-date"
                                        name="event-date"
                                    />
                                </div>
                            </div>
                            <div class="flex w-full justify-between  gap-4 ">
                                <div class="w-full md:w-1/2   md:mb-0 ">
                                    <label for="company" class="mb-1 block text-black dark:text-white">
                                        Starting Time
                                    </label>
                                    <input
                                        //   ref={(input) => (companyRef = input)}
                                        type="time"
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        id="company"
                                        name="company"
                                        placeholder="ex: 10 AM"
                                    />
                                </div>
                                <div class="w-full md:w-1/2   md:mb-0 ">
                                    <label for="company" class="mb-1 block text-black dark:text-white">
                                        Ending Time
                                    </label>
                                    <input
                                        //   ref={(input) => (companyRef = input)}
                                        type="time"
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        id="company"
                                        name="company"
                                        placeholder="ex: 1 PM"
                                    />
                                </div>

                            </div>
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Open for
                                </label>
                                <div class="flex items-center gap-3 flex-wrap">
                                    <Checkbox id={"Alumni"} CText={"Alumni"} />
                                    <Checkbox id={"Students"} CText={"Students"} />
                                    <Checkbox id={"Members"} CText={"Members"} />
                                    <Checkbox id={"Staff"} CText={"Staff"} />
                                    <Checkbox id={"Faculty"} CText={"Faculty"} />
                                    {/* <div className='flex justify-between'>
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
                                    </div> */}
                                </div>
                            </div>
                            <div>
                                <label
                                    for="desc"
                                    class="mb-1 block text-black dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    //  ref={(input) => (descriptionRef = input)}
                                    id="desc"
                                    rows="3"
                                    class="w-full resize-none rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    placeholder="Write your thoughts here..."
                                ></textarea>
                            </div>
                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EventUpdateModel
