import { useQuery } from "react-query";
import instance from "./apiConfig";
import { Cookies } from "react-cookie";

const getOrderDetails = async (status) => {
    const cookies = new Cookies();

    try{
        const url = `/users/me/orders?status=${status}`;
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


export const useOrderDetails = (status) => {
    return useQuery({
        queryKey: ["products",'MyCart',"get",status],
        queryFn: () => getOrderDetails(status),
    })
}