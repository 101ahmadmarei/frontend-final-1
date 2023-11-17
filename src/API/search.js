import { useQuery } from "react-query";
import instance from "./apiConfig";

const search = async (searchQuery) => {

    let uri = `/products?search_term=${searchQuery}&offset=0&limit=9`

    try{
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


export const useSearch = (searchQuery) => {
    return useQuery({
        queryKey: ["search","get",searchQuery],
        queryFn: () => search(searchQuery),
    })
}