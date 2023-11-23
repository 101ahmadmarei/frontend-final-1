import { useQuery } from 'react-query';
import instance from './apiConfig';
import { Cookies } from 'react-cookie';

const getOrderDetails = async (orderId, token) => {
    try {
        let url = `/users/me/orders/${orderId}`;
        const result = await instance.get(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: token, // Use the 'token' directly in the header
            },
        });
        return result.data;
    } catch (err) {
        throw new Error(err.response?.data || 'Error fetching data');
    }
};

export const useOrderDetails = (orderId) => {
    const cookies = new Cookies();
    const token = cookies.get('token'); // Get the token from cookies

    return useQuery(['Order', 'detail', orderId], () => getOrderDetails(orderId, token));
};
