import type RegisterData from "@/models/RegisterData";
import ApiClient from "@/config/ApiClient";
import type LoginData from "@/models/LoginData";

// register function
export const registerUser =async (signupData:RegisterData)=>{
   // api call to server to save data
   const response = await ApiClient.post('/auth/register',signupData);
   return response.data;
};


// login function
export const loginUser =async (loginData:LoginData)=>{
   // api call to server to login
   const response = await ApiClient.post('/auth/login',loginData);
   return response.data;
}



// get current login user


//refresh token function


//apis