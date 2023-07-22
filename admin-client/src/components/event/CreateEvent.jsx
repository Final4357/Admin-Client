import React, { Fragment } from 'react'
import Checkbox from '../Checkbox'

const CreateEvent = () => {
    return (
        <Fragment>
            <div class="w-full max-w-xl mx-auto">
                <div className='space-y-4'>
                    <h1 class="text-xl font-semibold text-black dark:text-white">Create New Event</h1>

                    <div class="space-y-4">
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Title
                                </label>
                                <input
                                    //  ref={(input) => (titleRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="Event-title"
                                    name="Event-title"
                                    placeholder="ex: Junior Programming Contest "
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Topic
                                </label>
                                <input
                                    //  ref={(input) => (titleRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                                    class="mb-3 block text-black dark:text-white"
                                    for="job-title"
                                >
                                    Venue
                                </label>
                                <input
                                    //  ref={(input) => (titleRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                                    class="mb-3 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Link (optional)
                                </label>
                                <input
                                    //  ref={(input) => (linktoRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="text"
                                    id="apply-link"
                                    name="apply-link"
                                    placeholder="e.g. Registration link and etc"
                                />
                            </div>
                            <div class=" w-full">
                                <label
                                    class="mb-3 block text-black dark:text-white"
                                    for="apply-link"
                                >
                                    Date
                                </label>
                                <input
                                    //   ref={(input) => (dateRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    type="date"
                                    id="event-date"
                                    name="event-date"
                                />
                            </div>
                        </div>
                        <div class="flex w-full justify-between  gap-4 ">
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    Starting Time
                                </label>
                                <input
                                    //   ref={(input) => (companyRef = input)}
                                    type="time"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    id="company"
                                    name="company"
                                    placeholder="ex: 10 AM"
                                />
                            </div>
                            <div class="w-full md:w-1/2   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    Ending Time
                                </label>
                                <input
                                    //   ref={(input) => (companyRef = input)}
                                    type="time"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                                Event website
                            </label>
                            <input
                                //  ref={(input) => (linktoRef = input)}
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                type="text"
                                id="apply-link"
                                name="apply-link"
                                placeholder="https://www.djangoproject.com/event"
                            />
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
                                class="mb-3 block text-black dark:text-white"
                            >
                                Description
                            </label>
                            <textarea
                                //  ref={(input) => (descriptionRef = input)}
                                id="desc"
                                rows="4"
                                class="w-full resize-none rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                placeholder="Write your thoughts here..."
                            ></textarea>
                        </div>
                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateEvent