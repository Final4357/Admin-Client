import axios from "axios";
import { store } from "../redux/store/store";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { setEvent, setEventDetails, setEventTotal, setLoading } from "../redux/state/eventSlice";
// import { ErrorToast } from "../helper/formHelper.js";
// import { getToken } from "../helper/sessionHelper.js";
const BaseURL = "http://localhost:8081/api/event"
//  const BaseURL = "https://iiuc-alumni.onrender.com/api/event"
// const AxiosHeader = { headers: { "token": getToken() } }

export const eventDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url);
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setEventDetails(result.data.data[0]))
            } else {
                store.dispatch(setEventDetails(null))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const updateEvent = (formData, id) =>{
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

export const eventListRequest = async (pageNo, perPage, searchKey) => {
    try {
        store.dispatch(setLoading(true))
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url);
        store.dispatch(setLoading(false))
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setEvent(result.data.data[0].Row))
                store.dispatch(setEventTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setEvent([]))
                store.dispatch(setEventTotal(0))
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
