import React from "react";

const Profile = () => {
    return (
        <section class="  dark:bg-gray-900 py-10">
            <div class="flex flex-col items-center justify-center lg:px-6 py-8 lg:py-0">

                <div className="w-full  rounded-lg  dark:border md:mt-0 md:max-w-2xl sm:max-w-md  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6">

                        <div class="profile flex justify-center ">
                            <img class="w-36 h-36 rounded-full object-fill" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                                // ref={(input) => userImgView = input}
                                alt="" />
                            <div class="w-36 h-36 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">

                                <img class="hidden absolute group-hover:block w-12" for="file-input" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                                <input
                                    type="file"
                                    id='file-input'
                                    className='absolute opacity-0'
                                //onChange={previewImage}
                                // ref={(input) => userImgRef = input}
                                />
                            </div>
                        </div>
                        <div class="space-y-2 md:space-y-3 " action="#">

                            <div className="flex flex-col lg:flex-row justify-between gap-4 ">
                                <div className="w-full lg:w-1/2">
                                    <label for="Fname" class="mb-3 block text-md font-medium text-black dark:text-white">First Name</label>
                                    <input type="text" name="fname" id="fname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                        //  ref={(input) => (fnameRef = input)}
                                        placeholder="Jhon" required="" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="lname" class="mb-3 block text-black text-md font-medium dark:text-white">Last Name</label>
                                    <input type="text" name="lname" id="lname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                        // ref={(input) => (lnameRef = input)}
                                        placeholder="Doe" required />
                                </div>
                            </div >
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="email" class="mb-3 block text-md font-medium text-black dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email"
                                        // ref={(input) => (emailRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="name@company.com" required="" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="sid" class="mb-3 block text-md font-medium text-black dark:text-white">Contact No</label>
                                    <input type="text" name="sid" id="sid"
                                        //ref={(input) => (sidRef = input)}
                                        class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        placeholder="+8801646507865" required />
                                </div>
                            </div>
                            <button
                                type="submit"
                                // onClick={onRegistration}
                                className="flex w-full justify-center rounded bg-primary space-y-12 p-3 font-medium text-gray"
                            >
                                Update
                            </button>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile