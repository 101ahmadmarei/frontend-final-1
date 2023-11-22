import { useMutation } from "react-query";
import instance from "./apiConfig";


const createAddress = async (data) => {
    try {
        console.log(data);
        const cookies = new cookies();
        const url = "/users/addresses";
        const result = await instance(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookies.get("token"),

            },
            data: data
        });
        return result;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export const useCreateAddress = () => {

    return useMutation({
        mutationFn: (data) => createAddress(data)
    });
};