import { useQuery } from "react-query";
import instance from "./apiConfig";

const getBrands = async () => {
    try{
        const uri = `/brands?offset=0&limit=7`;
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


export const useBrands = () => {
    return useQuery({
        queryKey: ["brands", "get"],
        queryFn: () => getBrands(),
    })
}