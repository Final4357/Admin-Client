import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { getToken, getUserDetails, removeSessions, setToken, setUserDetails } from "../helper/sessionHelper"
const AxiosHeader = { headers: { "token": getToken() } }
const BaseURL = "http://localhost:8081/api/auth"




export const LoginRequest = (email, password) => {
   
    let URL = BaseURL + "/login";
    let PostBody = { email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        
        if (res.status === 200) {
            setToken(res.data.token)
            setUserDetails(res.data.data)
            SuccessToast("Login Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
     
        if (err.response.data.status === 400) {
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