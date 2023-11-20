import { useQuery } from "react-query";
import instance from "./apiConfig";

const getProducts = async () => {
    let url = "products/2";
    try {
        const result = await instance(url, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
        return result;
    } catch (err) {
        return err.response.data;
    }
}


export const useRetriveData = () => {
    return useQuery({
        queryKey: ["products", "Retrive", "get"],
        queryFn: () => getProducts(),
    })
}