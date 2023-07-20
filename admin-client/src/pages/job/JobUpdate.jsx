import React, { Fragment } from 'react'

const JobUpdate = () => {
  return (
    <Fragment>
    <main class="main bg-white px-2 md:py-6">
        <div class="w-full max-w-xl mx-auto">
            <div action="" method="post">
                <h1 class="text-2xl font-bold mb-2">Update Job Details</h1>

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
                                id="job-title"
                                name="job-title"
                                placeholder="Frontend Developer"
                                autofocus
                            />
                        </div>

                        <div class="w-full">
                            <label
                                class="block text-gray-700 text-sm mb-2"
                                for="apply-link"
                            >
                                Salary
                            </label>
                            <input
                              //  ref={(input) => (salaryRef = input)}
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="texy"
                                id="apply-link"
                                name="apply-link"
                                placeholder=""
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

                    <div class="md:flex md:justify-between gap-4 ">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0">
                            <label
                                class="block text-gray-700 text-sm mb-2"
                                for="job-type"
                            >
                                Job Type
                            </label>
                            <div class="relative">
                                <select
                                    class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg  leading-tight focus:outline-none focus:border-gray-500"
                                    id="job-type"
                                    name="job-type"

                                   // ref={(input) => (jobtypeRef = input)}
                                >
                                    <option value="Fulltime">Full time</option>
                                    <option value="Parttime">Part time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Contractual">Contractual</option>
                                    <option value="Freelance">Freelance</option>
                                </select>

                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2  md:mb-0">
                            <label
                                for="location"
                                class="block text-gray-700 text-sm mb-2"
                            >
                                Experience
                            </label>
                            <div class="relative">
                                <select
                                    class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500"
                                    id="job-type"
                                    name="job-type"
                                   // ref={(input) => (experienceRef = input)}
                                >
                                    <option value="Entry">Entry (0-2 Years)</option>
                                    <option value="Intermediate">Intermediate (3-5 Years)</option>
                                    <option value="Expert">Expert (5 or Higher)</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
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
                    <div class="flex w-full justify-between  gap-4 ">
                        <div class="w-full md:w-full   md:mb-0 ">
                            <label for="company" class="block text-gray-700 text-sm mb-2">
                                Location
                            </label>
                            <input
                             //   ref={(input) => (locaitonRef = input)}
                                type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="location"
                                name="location"
                                placeholder="location"
                            />
                        </div>


                    </div>

                    <div class="flex w-full justify-between  gap-4 ">
                        <div class="w-full md:w-1/2   md:mb-0 ">
                            <label for="company" class="block text-gray-700 text-sm mb-2">
                                Company
                            </label>
                            <input
                             //   ref={(input) => (companyRef = input)}
                                type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="company"
                                name="company"
                                placeholder="Company"
                            />
                        </div>

                        <div class="w-full md:w-1/2 mb-4 md:mb-0">
                            <label
                                class="block text-gray-700 text-sm mb-2"
                                for="job-type"
                            >
                                Category
                            </label>
                            <div class="relative">
                                <select
                                    class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg  leading-tight focus:outline-none focus:border-gray-500"
                                    id="job-type"
                                    name="job-type"

                                   // ref={(input) => (categoryRef = input)}
                                >
                                    <option value="Onsite">Onsite</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>

                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
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
                        Create job
                    </button>
                </div>
            </div>
        </div>
    </main>
</Fragment>
  )
}

export default JobUpdate