import axios from "axios";
import { store } from "../redux/store/store";
import { setAlumni, setAlumniTotal, setDetails, setLoading } from "../redux/state/userSlice";
import { ErrorToast } from "../helper/formHelper";
// import { ErrorToast } from "../helper/formHelper.js";
// import store from "../redux/store/store";
// import { setAlumni, setAlumniDetails, setAlumniTotal } from "../redux/state/alumnislice";
// import { getToken } from "../helper/sessionHelper.js";
const BaseURL = "http://localhost:8081/api/alumni"
//  const BaseURL = "https://iiuc-alumni.onrender.com/api/alumni"
// const AxiosHeader = { headers: { "token": getToken() } }

export const alumniListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
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

export const alumniDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url);
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
    return axios.put(URL, formData).then((res) => {
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