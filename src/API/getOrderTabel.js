import { useQuery } from "react-query";
import instance from "./apiConfig";

const getProducts = async () => {

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


export const useProducts = (url) => {
    return useQuery({
        queryKey: ["products", "get", url],
        queryFn: () => getProducts(url),
    })
}