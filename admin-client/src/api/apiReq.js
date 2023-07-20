import axios from "axios";


let api_endpoint = 'https://nubela.co/proxycurl/api/v2/linkedin'
let linkedin_profile_url = 'https://www.linkedin.com/in/pradipnichite/'
let api_key = 'k10TAB4PteBm0sRkNuoM8A '
let headers = {'Authorization': 'Bearer ' + api_key}
let params={'url': linkedin_profile_url,'skills': 'include'}

// response = requests.get(api_endpoint,
//                         params={'url': linkedin_profile_url,'skills': 'include'},
//                         headers=headers)

export const alumninfoReq = async () => {
    try {
        
        const result = await axios.get(api_endpoint,
                                     params={'url': linkedin_profile_url,'skills': 'include'},
                                   headers);

        if (result.status === 200) {
            console.log(result.data)
           
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}