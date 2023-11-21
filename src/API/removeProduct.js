import { useMutation, useQueryClient } from "react-query";
import instance from "./apiConfig";
import { Cookies } from "react-cookie";

const removeProduct = async (orderId, productId) => {
    try {
        const url = `/orders/${orderId}/products/${productId}`;
        const cookies = new Cookies();
        console.log('order',orderId,'product', productId);

        const result = await instance(url, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "Authorization": cookies.get('token'),
            },
        })
        console.log('result', result);
        return result;
    } catch (err) {
        console.error('Error in removeProduct', err);
        return err.response.data;
    }
}



export const MutateRemove = () => {

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data) => removeProduct(data.orderId, data.productId),
        onSuccess: () => {
            console.log("Mutation success");
            queryClient.invalidateQueries(["products", 'MyCart', "get"])
        },
        onError: (error) => {
            console.error("Mutation error", error);
        },
    })
}