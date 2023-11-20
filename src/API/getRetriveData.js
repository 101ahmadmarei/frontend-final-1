import { useQuery } from "react-query";
import instance from "./apiConfig";

const getProducts = async (id) => {
    let url = `/products/${id}`;
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


export const useRetriveData = (id) => {
    return useQuery({
        queryKey: ["products", "Retrive", id, "get"],
        queryFn: () => getProducts(id),
    })
}