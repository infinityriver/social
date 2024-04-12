import axios from "axios";

const instance = axios.create({
    withCredentials: true, 
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "e00ce4f6-40ad-4eac-ad57-8f5135d8207a"}

})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    }
    
}
