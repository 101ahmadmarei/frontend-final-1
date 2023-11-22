import React from 'react'
import ItemSummary from '../itemSummary/itemSummary'
import './ItemRow.css'
import CoralBtn from '../CoralBtn/CoralBtn'
import { MutateRemove } from '../../API/removeProduct'
import { useQueryClient } from 'react-query'


function ItemRow({ product,orderId, showFunctions = true }) {

    const removeMutation = MutateRemove();

    const handleRemove = () => {
        console.log(orderId);
        console.log(product.product.id);
        removeMutation.mutate({"orderId": orderId, "productId":product.product.id });
    }

    return (
        <div className='item-row-container'>
            <ItemSummary product={product}/>
            <div className='item-row'>
                <div className='item-row-data'>
                    <p>{'$' + product.product.price}</p>
                    <p>{product.product_quantity}</p>
                    <p>{'$' + (product.product.price * product.product_quantity)}</p>
                </div>

                {showFunctions ?
                    <div className='item-row-functions'>
                        {/* <a style={{ color: '#1B4B66' }} href='https'>Add to wishlist</a>
                        <a style={{ color: '#B00020' }} href='https'>Remove</a> */}
                        <CoralBtn type={'text'} fontWeight={600} label={'Add to wishlist'}/>
                        <CoralBtn type={'text'} fontWeight={600} color={'error'} label={'Remove'} click={handleRemove}/>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ItemRow