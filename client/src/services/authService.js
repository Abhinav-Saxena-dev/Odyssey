import axios from "axios";

const baseUrl = "http://localhost:8000"

const AuthApi = async ({token}) => {
    try{
        if(token){
            axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
        }
        const userInfo = await axios.get(`${baseUrl}/user-profile`)
        // console.log(userInfo);
        if(userInfo){
        return userInfo;
        }
    }catch(error){
        return error
    }
}

export default AuthApi