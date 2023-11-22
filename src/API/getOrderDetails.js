import { useQuery } from "react-query";
import instance from "./apiConfig";

const getProducts = async () => {
    let url = "/users/me/orders/id";
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


export const useOrderDetails = (url) => {
    return useQuery({
        queryKey: ["Order", "detail", url],
        queryFn: () => getProducts(url),
    })
}