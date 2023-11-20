import { useQuery } from "react-query";
import instance from "./apiConfig";

const getProducts = async () => {
    let url = "/products/1/reviews";
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


export const useRatingReview = () => {
    return useQuery({
        queryKey: ["Review", "Rating", "get"],
        queryFn: () => getProducts(),
    })
}