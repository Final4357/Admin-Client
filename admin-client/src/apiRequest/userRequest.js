import axios from "axios";
import { store } from "../redux/store/store";
import { setAdmin, setAdminTotal, setAlumni, setAlumniTotal, setDetails, setLoading, setUser, setUserTotal } from "../redux/state/userSlice";
import { ErrorToast, SuccessToast } from "../helper/formHelper";

import { getToken } from "../helper/sessionHelper.js";
const BaseURL = "http://localhost:8081/api/user"
//  const BaseURL = "https://iiuc-alumni.onrender.com/api/user"
 const AxiosHeader = { headers: { "token": getToken() } }

export const alumniListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/alumniList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url);
        store.dispatch(setLoading(false))
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setAlumni(result.data.data[0].Row))
                store.dispatch(setAlumniTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setAlumni([]))
                store.dispatch(setAlumniTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(setLoading(false))
        ErrorToast("Something went wrong.")
    }
}

export const studentListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/studentList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url,AxiosHeader);
        store.dispatch(setLoading(false))
        
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setUser(result.data.data[0].Row))
                store.dispatch(setUserTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setUser([]))
                store.dispatch(setUserTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(setLoading(false))
        ErrorToast("Something went wrong.")
    }
}

export const adminListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/adminList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url,AxiosHeader);
        store.dispatch(setLoading(false))
        
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setAdmin(result.data.data[0].Row))
                store.dispatch(setAdminTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setAdmin([]))
                store.dispatch(setAdminTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(setLoading(false))
        ErrorToast("Something went wrong.")
    }
}

export const alumniDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url,AxiosHeader);
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setDetails(result.data.data[0]))

            } else {
                store.dispatch(setDetails(""))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}
export const studentDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url,AxiosHeader);
        
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setDetails(result.data.data[0]))

            } else {
                store.dispatch(setDetails(""))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}
export const adminDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url,AxiosHeader);
        
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setDetails(result.data.data[0]))

            } else {
                store.dispatch(setDetails(""))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}




export const updateAlumni = (formData, id) =>{
    console.log(formData)
    let URL = BaseURL + "/"+id;
    return axios.put(URL, formData,AxiosHeader).then((res) => {
        if (res.status === 200) {
            SuccessToast("Alumni Details Updated")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const deleteUserById = async (id) => {
    try {
        let url = BaseURL + "/" + id;
        const result = await axios.delete(url, AxiosHeader);
        if (result.status === 200) {
            SuccessToast("User Deleted! ")

        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

export const deleteAlumniById = async (id) => {
    try {
        let url = BaseURL + "/" + id;
        const result = await axios.delete(url, AxiosHeader);
        if (result.status === 200) {
            SuccessToast("ALumni Deleted! ")

        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

export const deleteAdminById = async (id) => {
    try {
        let url = BaseURL + "/" + id;
        const result = await axios.delete(url, AxiosHeader);
        if (result.status === 200) {
            SuccessToast("Admin Deleted! ")

        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}