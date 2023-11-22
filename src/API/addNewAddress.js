import { useMutation } from "react-query";
import instance from "./apiConfig";
import { useCookies } from "react-cookie"; // Import useCookies from 'react-cookie'

const createAddress = async (data, token) => {
    try {
        const url = "/users/addresses";
        const result = await instance(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            data: data,
        });
        return result;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export const useCreateAddress = () => {
    const [cookies] = useCookies(["token"]); // Use useCookies hook within a component or a custom hook

    const mutateAddress = async (data) => {
        const token = cookies.token || ''; // Get the token from cookies or set a default value
        return await createAddress(data, token);
    };

    return useMutation(mutateAddress);
};
