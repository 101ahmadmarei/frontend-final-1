import { useMutation } from "react-query";
import instance from "./apiConfig";
import { Cookies } from "react-cookie";

const placeOrder = async (orderId,data) => {
    try {
        const url = `/orders/${orderId}`;
        const cookies = new Cookies();

        const result = await instance(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": cookies.get('token'),
            },
            data:data
        })
        console.log('result', result);
        return result;
    } catch (err) {
        return err.response.data;
    }
}



export const MutatePlaceOrder = () => {

    return useMutation({
        mutationFn: (data) => placeOrder(data.orderId, data.data),
    })
}