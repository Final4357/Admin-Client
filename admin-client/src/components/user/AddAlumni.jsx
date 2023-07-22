import React, { Fragment } from 'react'

const AddAlumni = () => {
    return (
        <Fragment>
            <div className='w-full max-w-2xl mx-auto'>
                <div class="space-y-3 md:space-y-4">
                    <h1 class="text-xl font-semibold text-black dark:text-white">
                        Add New Alumni
                    </h1>

                    <div class="profile flex justify-center ">
                        <img class="w-36 h-36 rounded-full object-fill" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
                        {/* ref={(input) => userImgView = input}  */}
                        <div class="w-36 h-36 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                            <img class="hidden absolute group-hover:block w-12" for="file-input" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                            <input
                                type="file"
                                id='file-input'
                                className='absolute opacity-0'
                            // onChange={previewImage}
                            // ref={(input) => userImgRef = input}
                            />
                        </div>
                    </div>
                    <div class="space-y-2 md:space-y-3" action="#">
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="Fname" class="mb-3 block text-black dark:text-white">Firstname</label>
                                <input type="text" name="fname" id="fname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                    // ref={(input) => (fnameRef = input)}
                                    placeholder="e.g. Jhon" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="lname" class="mb-3 block text-black dark:text-white">Lastname</label>
                                <input type="text" name="lname" id="lname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                    // ref={(input) => (lnameRef = input)}
                                    placeholder="e.g. Doe" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="email" class="mb-3 block text-black dark:text-white">Email</label>
                                <input type="email" name="email" id="email"
                                    // ref={(input) => (emailRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="name@company.com" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="sid" class="mb-3 block text-black dark:text-white">Student ID</label>
                                <input type="text" name="sid" id="sid"
                                    // ref={(input) => (sidRef = input)}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    placeholder="e.g. C180000" required />
                            </div>
                        </div>
                        <div>


                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="Fname" class="mb-3 block text-black dark:text-white">Position</label>
                                <input type="text" name="fname" id="fname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    // ref={(input) => (positionRef = input)}
                                    placeholder="e.g. Sr. Software Engineer" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="lname" class="mb-3 block text-black dark:text-white">Company Name</label>
                                <input type="text" name="lname" id="lname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                    // ref={(input) => (companyRef = input)}
                                    placeholder="e.g. ABC Limited" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="degree" class="mb-3 block text-black dark:text-white">Degree</label>
                                <select
                                    // ref={(input) => (degreeRef = input)}
                                    id="degree" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option disabled selected>Choose a Degree</option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Masters">Masters</option>
                                </select>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="degree" class="mb-3 block text-black dark:text-white">Dept</label>
                                <select
                                    // ref={(input) => (deptRef = input)}
                                    id="degree" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option disabled selected>Choose a Dept</option>
                                    <option value="CSE">CSE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="ETE">ETE</option>
                                    <option value="ETE">CCS</option>
                                    <option value="EEE">EB</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="batch" class="mb-3 block text-black dark:text-white">Batch</label>
                                <input type="text" name="batch" id="batch" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    // ref={(input) => (batchRef = input)}
                                    placeholder="e.g. 47" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="gender" class="mb-3 block text-black dark:text-white">Gender</label>
                                <select
                                    // ref={(input) => (genderRef = input)} 
                                    id="gender" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option disabled selected>Select a Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="Fname" class="mb-3 block text-black dark:text-white">Contact No</label>
                                <input type="text" name="fname" id="fname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                    // ref={(input) => (phoneRef = input)}
                                    placeholder="e.g. 01818181818" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="lname" class="mb-3 block text-black dark:text-white">Address</label>
                                <input type="text" name="lname" id="lname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                                    // ref={(input) => (addressRef = input)}
                                    placeholder="e.g. IIUC, Kumira, Chattogram" required />
                            </div>
                        </div>
                        <button
                            type="submit"
                            // onClick={onRegistration}
                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                        >
                            ADD Alumni
                        </button>



                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddAlumni