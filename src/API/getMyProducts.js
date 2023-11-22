import { useQuery } from "react-query";
import instance from "./apiConfig";
import { Cookies } from "react-cookie";

const getMyCart = async () => {
    const cookies = new Cookies();

    try{
        const url = '/orders?status=processing'
        const result = await instance(url,{
            method: "GET",
            headers:{
                "content-type": "application/json",
                "Authorization": cookies.get('token'),
            },
        })
        return result;
    }catch (err){
        return err.response.data;
    }
}


export const useMyCart = () => {
    return useQuery({
        queryKey: ["products",'MyCart',"get"],
        queryFn: () => getMyCart(),
    })
}