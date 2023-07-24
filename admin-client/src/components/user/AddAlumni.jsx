import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { store } from '../../redux/store/store';
import { alumniDetailsById, updateAlumni } from '../../apiRequest/userRequest';
import { useSelector } from 'react-redux';
import { ErrorToast, IsEmail, IsEmpty, getBase64 } from '../../helper/formHelper';
import { setDetails } from '../../redux/state/userSlice';

const AddAlumni = () => {
    let fnameRef, lnameRef, emailRef, phoneRef, addressRef, sidRef, deptRef, batchRef, positionRef, companyRef, genderRef, degreeRef, userImgRef, userImgView = useRef()
    let [profile, setProfile] = useState({});
    const profileDetails = useSelector((state) => state.user.profileDetails)
    let params = useParams()
    const location = useLocation()
    let navigate = useNavigate()

    const previewImage = () => {
        let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64Img) => {
          userImgView.src = base64Img;
        })
      }
    
    let getProfileData = (e) => {
        console.log(e.target)
        e.preventDefault();
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (params.id) {
            alumniDetailsById(params.id)
        } else {
          store.dispatch(setDetails(null))
        }
    }, [location])

      const validation = () =>{
        if (IsEmpty(fnameRef.value)) {
            ErrorToast("First Name required !");
          } else if (IsEmpty(lnameRef.value)) {
            ErrorToast("Last Name Required !");
          } else if (IsEmail(emailRef.value)) {
            ErrorToast("Invalid email address.");
          } else if (IsEmpty(sidRef.value)) {
            ErrorToast("Student Id Required !");
          }else if (IsEmpty(deptRef.value)) {
            ErrorToast("Dept is Required !");
          } else if (IsEmpty(batchRef?.value)) {
            ErrorToast("Batch is Required !");
          }else if (IsEmpty(positionRef.value)) {
            ErrorToast("Position Name Required !");
          } else if (IsEmpty(companyRef.value)) {
            ErrorToast("Company is Required !");
          } else if (IsEmpty(genderRef.value)) {
            ErrorToast("Gender is Required !");
          } else if (IsEmpty(degreeRef.value)) {
            ErrorToast("Degree is Required !");
          } else if (IsEmpty(phoneRef.value)) {
            ErrorToast("Contact No is Required !");
          } else if (IsEmpty(addressRef.value)) {
            ErrorToast("Address is Required !");
          }else return true

          return false;
      }

      const onCreate = () =>{

      }

      const onUpdate = () => {
        if (validation()) {
            console.log("jo")
            const formData = new FormData()
            formData.append('firstName', fnameRef.value)
            formData.append('lastName', lnameRef.value)
            formData.append('email', emailRef.value)
            formData.append('studentId', sidRef.value)
            formData.append('dept', deptRef.value)
            formData.append('batch', batchRef.value)
            formData.append('position', positionRef.value)
            formData.append('company', companyRef.value)
            formData.append('gender', genderRef.value)
            formData.append('degree', degreeRef.value)
            formData.append('phone', phoneRef.value)
            formData.append('address', addressRef.value)
            formData.append('photo', userImgRef.files[0])
            if (updateAlumni(formData, params.id)) {
                navigate("/users/alumni")
            } else ErrorToast("Something Went Wrong");
        }
      };

    return (
        <Fragment>
            <div className='w-full max-w-2xl mx-auto'>
                <div class="space-y-3 md:space-y-4">
                    <h1 class="text-xl font-semibold text-black dark:text-white">
                        {params.id ? "Update Alumni" : "Add New Alumni"}
                    </h1>

                    <div class="profile flex justify-center ">
                        <img class="w-36 h-36 rounded-full object-fill" ref={(input) => userImgView = input} src={params.id ? profileDetails?.photo?.url : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="" />
                        <div class="w-36 h-36 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                            <img class="hidden absolute group-hover:block w-12" for="file-input" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                            <input
                                type="file"
                                id='file-input'
                                className='absolute opacity-0'
                                onChange={previewImage}
                            ref={(input) => userImgRef = input}
                            />
                        </div>
                    </div>
                    <form class="space-y-2 md:space-y-3" onSubmit={onCreate}>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="firstname" class="mb-3 block text-black dark:text-white">Firstname</label>
                                <input type="text"  id="firstname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    name="firstname"
                                    value={profileDetails?.firstname}
                                    // ref={(input) => (fnameRef = input)}
                                    onChange={(e)=>getProfileData(e)}
                                    placeholder="e.g. Jhon" required />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="lname" class="mb-3 block text-black dark:text-white">Lastname</label>
                                <input type="text" name="lastname" id="lastname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={profileDetails?.lastname}
                                    // ref={(input) => (lnameRef = input)}
                                    onChange={getProfileData}
                                    placeholder="e.g. Doe" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="email" class="mb-3 block text-black dark:text-white">Email</label>
                                <input type="email" name="email" id="email"
                                    value={profileDetails?.email}
                                    // ref={(input) => (emailRef = input)}
                                    onChange={getProfileData}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="name@company.com" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="studentId" class="mb-3 block text-black dark:text-white">Student ID</label>
                                <input type="text" name="studentId" id="studentId"
                                    value={profileDetails?.studentId}
                                    // ref={(input) => (sidRef = input)}
                                    onChange={getProfileData}
                                    class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    placeholder="e.g. C180000" required />
                            </div>
                        </div>
                        <div>


                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="position" class="mb-3 block text-black dark:text-white">Position</label>
                                <input type="text" name="position" id="position" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={profileDetails?.position}
                                    // ref={(input) => (positionRef = input)}
                                    onChange={getProfileData}
                                    placeholder="e.g. Sr. Software Engineer" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="lname" class="mb-3 block text-black dark:text-white">Company Name</label>
                                <input type="text" name="lname" id="lname" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={profileDetails?.company}
                                    // ref={(input) => (companyRef = input)}
                                    onChange={getProfileData}
                                    placeholder="e.g. ABC Limited" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="degree" class="mb-3 block text-black dark:text-white">Degree</label>
                                <select
                                    // ref={(input) => (degreeRef = input)}
                                    onChange={getProfileData}
                                    name='degree'
                                    id="degree" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option disabled selected>Choose a Degree</option>
                                    <option value="Bachelors" selected={profileDetails?.degree === "Bachelors"}>Bachelors</option>
                                    <option value="Masters" selected={profileDetails?.degree === "Masters"}>Masters</option>
                                </select>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="degree" class="mb-3 block text-black dark:text-white">Dept</label>
                                <select
                                    // ref={(input) => (deptRef = input)}
                                    onChange={getProfileData}
                                    name='dept'
                                    id="degree" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option disabled selected>Choose a Dept</option>
                                    <option value="CSE" selected={profileDetails?.dept === "CSE"}>CSE</option>
                                    <option value="EEE" selected={profileDetails?.dept === "EEE"}>EEE</option>
                                    <option value="ETE" selected={profileDetails?.dept === "ETE"}>ETE</option>
                                    <option value="ETE" selected={profileDetails?.dept === "CCS"}>CCS</option>
                                    <option value="EEE" selected={profileDetails?.dept === "EB"}>EB</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="batch" class="mb-3 block text-black dark:text-white">Batch</label>
                                <input type="text" name="batch" id="batch" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={profileDetails?.batch}
                                    // ref={(input) => (batchRef = input)}
                                    onChange={getProfileData}
                                    placeholder="e.g. 47" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="gender" class="mb-3 block text-black dark:text-white">Gender</label>
                                <select
                                    // ref={(input) => (genderRef = input)} 
                                    onChange={getProfileData}
                                    name='gender'
                                    id="gender" class="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <option disabled selected>Select a Gender</option>
                                    <option value="Male" selected={profileDetails?.gender === "Male"}>Male</option>
                                    <option value="Female" selected={profileDetails?.gender === "Female"}>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="w-full lg:w-1/2">
                                <label for="phone" class="mb-3 block text-black dark:text-white">Contact No</label>
                                <input type="text" name="phone" id="phone" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={profileDetails?.phone}
                                    // ref={(input) => (phoneRef = input)}
                                    onChange={getProfileData}
                                    placeholder="e.g. 01818181818" required="" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="address" class="mb-3 block text-black dark:text-white">Address</label>
                                <input type="text" name="address" id="address" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    value={profileDetails?.address}
                                    // ref={(input) => (addressRef = input)}
                                    onChange={getProfileData}
                                    placeholder="e.g. IIUC, Kumira, Chattogram" required />
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={ params.id ? onUpdate : onCreate}
                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                        >
                            {params.id ? "Save" : "Create"}
                        </button>



                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default AddAlumni