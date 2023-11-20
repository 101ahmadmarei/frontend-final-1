import { useQuery } from "react-query";
import instance from "./apiConfig";

const getProducts = async () => {
    let url = "/products?random=true&offset=0&limit=10";
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


export const useRelatedProducts = () => {
    return useQuery({
        queryKey: ["products", "Related", "get"],
        queryFn: () => getProducts(),
    })
}