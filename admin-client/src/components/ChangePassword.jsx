import React, { Fragment } from 'react'

const ChangePassword = () => {
  return (
    <Fragment>
            <div class="w-full max-w-xl mx-auto">
                <div className='space-y-4'>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                        Change Password
                    </h3>

                    <div class="space-y-4">
                    <div class="flex w-full justify-between  gap-4 ">
                            <div class="w-full md:w-full   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    Old Password
                                </label>
                                <input
                                    //   ref={(input) => (locaitonRef = input)}
                                    type="Password"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    id="oPass"
                                    name="oPass"
                                    placeholder=""
                                />
                            </div>


                        </div>
                        <div class="flex w-full justify-between  gap-4 ">
                            <div class="w-full md:w-full   md:mb-0 ">
                                <label for="company" class="mb-3 block text-black dark:text-white">
                                    New Password
                                </label>
                                <input
                                    //   ref={(input) => (locaitonRef = input)}
                                    type="Password"
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    id="nPass"
                                    name="nPass"
                                    placeholder=""
                                />
                            </div>


                        </div>
                    </div>
                    <div>
                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                        Save
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
  )
}

export default ChangePassword