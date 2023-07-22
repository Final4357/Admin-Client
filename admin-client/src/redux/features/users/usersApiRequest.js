import axios from "axios"
import { ErrorToast } from "../../../helper/formHelper";
// import { getToken } from "../helper/sessionHelper.js";
const BaseURL = "http://localhost:8081/api/alumni"
//  const BaseURL = "https://iiuc-alumni.onrender.com/api/alumni"
// const AxiosHeader = { headers: { "token": getToken() } }

export const alumniListRequest = async  (pageNo, perPage, searchKey) =>{
    try {
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`;
        const result = await axios.get(url);
        if (result.status === 200) {
            return result;
        } else {
            ErrorToast("Something went wrong.")
            return
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
        return
    }
  }

  export const alumniDetailsRequest = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url);
        if (result.status === 200) {
            return result
        } else {
            ErrorToast("Something went wrong.")
            return
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
        return
    }
}