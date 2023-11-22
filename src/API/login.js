import { useMutation} from "react-query";
import instance from "./apiConfig";

const login = async (data) => {
    try{
        
        const uri = `/login`;
        const result = await instance(uri,{
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            data:data
        })
        return result;
    }catch (err){
        return err.response.data;
    }
}


export const MutateLogin =  () => {
    return useMutation({
        mutationFn: login,
    })
}