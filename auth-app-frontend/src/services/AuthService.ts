import type RegisterData from "@/models/RegisterData";
import ApiClient from "@/config/ApiClient";
import { AwardIcon } from "lucide-react";
import { Await } from "react-router";
export const registerUser =async (signupData:RegisterData)=>{
   // api call to server to save data
   await ApiClient.post('/auth/register',signupData);
}