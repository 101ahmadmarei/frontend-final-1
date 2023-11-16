import { useQuery } from "react-query";
import instance from "./apiConfig";

const getCategories = async (offset =  0, limit = 7) => {
    try{
        const uri = `/categories?offset=${offset}&limit=${limit}`;
        const result = await instance(uri,{
            method: "GET",
            headers:{
                "content-type": "application/json",
            },
        })
        return result;
    }catch (err){
        return err.response.data;
    }
}


export const useCategories = (offset,limit) => {
    return useQuery({
        queryKey: ["categories", "get", offset, limit],
        queryFn: () => getCategories(offset,limit),
    })
}