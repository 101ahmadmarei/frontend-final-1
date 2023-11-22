import { useMutation} from "react-query";
import instance from "./apiConfig";
import { useCookies } from "react-cookie";

export const addToCart = async (id,token,data) => {

    // const [cookies] = useCookies(["token"]);

    try{
        const uri = `/orders/products/${id}`;
        const result = await instance(uri,{
            method: "POST",
            headers:{
                "content-type": "application/json",
                "Authorization" : token,
            },
            data:data
        })
        return result;
    }catch (err){
        return err.response.data;
    }
}


// export const MutateAddToCart =  () => {
//     return useMutation({
//         mutationFn: addToCart,
//     })
// }